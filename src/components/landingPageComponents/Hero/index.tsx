import MainButton from "@/components/MainButton";
import HeroSvg from "/public/svg/hero.svg"

const Hero = () => {
    return(
        <div className="flex justify-center items-center">
            <div className="grid lg:grid-cols-12 grid-cols-2 gap-16 bg-[var(--primary-blue)] w-full">

                <div className="xl:col-span-4 lg:col-span-3 col-span-2 flex justify-center items-center flex-col">
                    <h2 className="text-white xl:text-5xl lg:text-4xl  text-5xl xl:p-16 p-16 lg:p-10 ">
                        سلامتی «شما» 
                        برای «ما»
                        مهم است.
                    </h2>
                    <MainButton value="شروع کنیم!" className="bg-[var(--green-btn)] xl:w-1/3 lg:w-2/3 h-20 lg:mx-36 hover:bg-[var(--hover-green)] hover:duration-100 xl:scale-95 2xl:scale-100 scale-90"/>
                </div>
                
                <div className="lg:mt-32 xl:col-span-8 lg:col-span-9 px-0 col-span-2 flex justify-center">
                    <HeroSvg />
                </div>
            </div>
        </div>
    )
};
export default Hero;