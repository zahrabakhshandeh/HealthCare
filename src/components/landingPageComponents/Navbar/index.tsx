import NavElement from "../NavElement";

const Navbar = () => {
    return(
        <nav className="py-14 bg-[var(--back-ground-white)] p-2"> 
            <ul className="flex flex-row gap-7  justify-center items-center">
                <li>
                    <NavElement text=" خانه" />
                </li>
                <li>
                    <NavElement text="خدمات" />
                </li>
                <li>
                    <NavElement text="دباره ما" />
                </li>
                <li>
                    <NavElement text="کمک" />
                </li>
            </ul>
        </nav>
    )
};
export default Navbar;