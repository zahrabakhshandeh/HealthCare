import NavElement from "../NavElement";

const Navbar = () => {
    return(
        <nav className="py-10 bg-[var(--back-ground-white)] p-2 flex justify-center"> 
            <ul className="flex flex-row gap-7 justify-center items-center">
                <li>
                    <NavElement text=" خانه" link='./s' />
                </li>
                <li>
                    <NavElement text="خدمات" link='./s'/>
                </li>
                <li>
                    <NavElement text="دباره ما" link='./s'/>
                </li>
                <li>
                    <NavElement text="کمک" link='./s'/>
                </li>
            </ul>
        </nav>
    )
};
export default Navbar;