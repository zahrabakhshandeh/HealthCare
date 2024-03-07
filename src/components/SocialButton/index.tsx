import React, { FunctionComponent, ReactNode, useCallback} from "react";
import GoogleLogo from "/public/svg/google.svg";
import FaceBookLogo from "/public/svg/facebook.svg";
import AppleLogo from "/public/svg/apple.svg";
import { ButtonPropsTypes } from "@/types";


const logoMap: { [key: string]: FunctionComponent } = {
    google: GoogleLogo,
    apple: AppleLogo,
    default: FaceBookLogo,
};

const LoginByButton: React.FC<ButtonPropsTypes> = ({variant , title}) => {

    const Logo = logoMap[variant || 'default'];

    return (
        <button title={title} type="submit" className="rounded-full shadow-md ">
            <Logo />
        </button>
    );
};
export default LoginByButton;