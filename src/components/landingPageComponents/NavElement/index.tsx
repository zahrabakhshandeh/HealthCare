import { NavElementType } from "@/types";

const NavElement = ({text, icon}: NavElementType) => {
    return(
        <>
            <h1 className = "text-2xl bold">
                {text}
            </h1>
            {icon}
        </>
    )
};
export default NavElement;