import MainButton from "@/components/MainButton";
import HeroSvg from "/public/svg/hero.svg"
const Hero = () => {
    return(
        <div className="flex justify-center">
            <div className="grid grid-cols-2 px-10 pt-40 bg-[var(--primary-blue)] w-full">
                <div className="flex flex-col xl:gap-32 items-start">
                    <h2 className="xl:text-8xl lg:text-2xl text-white lg:px-40 md:px-16">
                        سلامتی «شما» 
                        برای «ما»
                        مهم است.
                    </h2>
                    <MainButton value="شروع کنیم!" className="bg-[var(--green-btn)] w-1/3 h-20 mx-36"/>
                </div>
                <div className="lg:scale-75 xl:scale-100">
                    <HeroSvg />
                </div>
            </div>
        </div>
    )
};
export default Hero;