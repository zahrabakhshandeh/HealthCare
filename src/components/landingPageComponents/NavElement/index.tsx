import { NavElementType } from "@/types";
import Link from "next/link";

const NavElement = ({text, icon, link}: NavElementType) => {
    return(
        <Link href={`${link}`}>
            <h1 className="text-xl bold hover:bg-[var(--primary-blue)] hover:text-white px-3 hover:rounded-lg hover:duration-150 hover:ease-out">
                {text}
            </h1>
            {icon}
        </Link>
    )
};
export default NavElement;