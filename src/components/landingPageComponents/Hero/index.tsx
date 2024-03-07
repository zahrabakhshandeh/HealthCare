import MainButton from "@/components/MainButton";
import HeroSvg from "/public/svg/hero.svg"

const Hero = () => {
    return(
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 xl:px-10 xl:pt-40 bg-[var(--primary-blue)] w-full">

                <div className="flex flex-col xl:gap-32 items-start col-span-1">
                    <h2 className="xl:text-8xl lg:text-2xl text-white 2xl:px-36 md:px-16">
                        سلامتی «شما» 
                        برای «ما»
                        مهم است.
                    </h2>
                    <MainButton value="شروع کنیم!" className="bg-[var(--green-btn)] w-1/3 h-20 lg:mx-36"/>
                </div>
                
                <div className="lg:scale-75 xl:scale-100 flex xl:gap-32 items-center col-span-1">
                    <HeroSvg />
                </div>
            </div>
        </div>
    )
};
export default Hero;