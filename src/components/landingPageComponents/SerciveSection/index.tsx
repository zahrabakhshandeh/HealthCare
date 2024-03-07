import ServiceBox from "../ServiceBox";
import ServiceFemale from "/public/svg/service_female.svg"
import ServiceLung from "/public/svg/service_lung.svg"

const ServiceSection = () => {
    return(
        <div className="grid grid-cols-4 mx-32">
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body=" توضیحات توضیحات توضیحات توضیحات" icon={<ServiceFemale />}/>
            </div>
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body="توضیحات توضیحات توضیحات توضیحات" icon={<ServiceLung />}/>
            </div>
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body="توضیحات توضیحات توضیحات توضیحات"/>
            </div>
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body="توضیحات توضیحات توضیحات توضیحات"/>
            </div>
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body="توضیحات توضیحات توضیحات توضیحات"/>
            </div>
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body="توضیحات توضیحات توضیحات توضیحات"/>
            </div>            
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body="توضیحات توضیحات توضیحات توضیحات"/>
            </div>            
            <div className="flex justify-center items-center col-span-1">
                <ServiceBox header="خدمات" body="توضیحات توضیحات توضیحات توضیحات"/>
            </div>            
        </div>
    )
};
export default ServiceSection;