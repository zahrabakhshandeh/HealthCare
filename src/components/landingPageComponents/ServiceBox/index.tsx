import { ServiceBoxType } from "@/types";
import DefaultLogo from "/public/svg/service_tooth.svg"
import Link from "next/link";

const ServiceBox = ({header, body, icon, color, link}:ServiceBoxType ) => {
    return(
        <Link href={`${link}`} className="flex justify-center items-center flex-col m-14 xl:scale-100 md:scale-90  2xl:scale-125">
            <div className={`${color} rounded-full bg-[var(--green-btn)] w-24 h-24 flex justify-center items-center m-4`}>
                <div className="scale-50">
                    {icon?icon:<DefaultLogo />}
                </div>
            </div>
            <div className="flex justify-center flex-col items-center">
                <p className="text-5xl">{header}</p>
                <p className="text-base">{body}</p>
            </div>
        </Link>
    )
};
export default ServiceBox;