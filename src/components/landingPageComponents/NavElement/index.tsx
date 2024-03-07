import { NavElementType } from "@/types";
import Link from "next/link";

const NavElement = ({text, icon, link}: NavElementType) => {
    return(
        <Link href={`${link}`}>
            <h1 className = "text-xl bold">
                {text}
            </h1>
            {icon}
        </Link>
    )
};
export default NavElement;