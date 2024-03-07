import { ServiceBoxType } from "@/types";
import DefaultLogo from "/public/svg/service_tooth.svg"

const ServiceBox = ({header, body, icon, color}:ServiceBoxType ) => {
    return(
        <div className="flex justify-center items-center flex-col m-14">
            <div className={`${color} rounded-full bg-[var(--green-btn)] w-24 h-24 flex justify-center items-center`}>
                {icon?icon:<DefaultLogo />}
            </div>
            <div>
                <h2 className="text-5xl">{header}</h2>
                <p className="text-base p-1">{body}</p>
            </div>
        </div>
    )
};
export default ServiceBox;