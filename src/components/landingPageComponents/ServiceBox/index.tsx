import { ServiceBoxType } from "@/types";

const ServiceBox = ({header, body, icon, color}:ServiceBoxType ) => {
    return(
        <div>
            <div className={`${color} rounded-full`}>
                {icon}
            </div>
            <div>
                <h2>{header}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
};
export default ServiceBox;