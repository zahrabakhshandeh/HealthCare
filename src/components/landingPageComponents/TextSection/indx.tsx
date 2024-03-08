import TextBox from "../TextBox";
import HowToHelp_svg1 from "/public/svg/how_we_help1.svg"
import HowToHelp_svg2 from "/public/svg/Online Doctor-pana 1.svg"
import HowToHelp_svg3 from "/public/svg/Forensic medicine.svg";
import HowToHelp_svg4 from "/public/svg/Group 88.svg";

const TextSection = () => {
    return(
        <div className="grid space-y-28 gap-y-32 lg:grid-cols-9 grid-cols-2 m-10 mt-36">
            <div className="lg:col-span-5 col-span-2 flex justify-center scale-125 md:scale-100">
                <HowToHelp_svg1 />
            </div>
            <div className="lg:col-span-4 col-span-2">
                <TextBox tittle="موضوع" body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"/>
            </div> 
            <div className="lg:col-span-4 col-span-2">
                <TextBox tittle="موضوع" body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"/>
            </div> 
            <div className="lg:col-span-5  col-span-2 flex justify-center scale-125 md:scale-100">
                <HowToHelp_svg2 />
            </div>
            <div className="lg:col-span-5  col-span-2 flex justify-center scale-125 md:scale-100">
                <HowToHelp_svg3 />
            </div>
            <div className="lg:col-span-4 col-span-2">
                <TextBox tittle="موضوع" body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"/>
            </div> 
            <div className="lg:col-span-4 col-span-2">
                <TextBox tittle="موضوع" body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"/>
            </div> 

            <div className="lg:col-span-5  col-span-2 flex justify-center scale-125 md:scale-100"><HowToHelp_svg4 /></div>

            <div></div>
        </div>
    )
};
export default TextSection;