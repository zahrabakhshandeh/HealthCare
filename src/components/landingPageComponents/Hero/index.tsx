import MainButton from "@/components/MainButton";
import HeroSvg from "/public/svg/hero.svg"

const Hero = () => {
    return(
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-9 xl:px-10 xl:pt-40 bg-[var(--primary-blue)] w-full">

                <div className="flex flex-col 2xl:gap-28 items-start xl:gap-10 col-span-3 lg:col-span-3 md:col-span-4">
                    <h2 className="2xl:text-7xl xl:text-6xl lg:text-xl text-white 2xl:px-36 xl:px-4 md:px-16 lg:px-20">
                        سلامتی «شما» 
                        برای «ما»
                        مهم است.
                    </h2>
                    <MainButton value="شروع کنیم!" className="bg-[var(--green-btn)] w-1/3 h-20 lg:mx-36 hover:bg-[var(--hover-green)] hover:duration-100 xl:scale-95 2xl:scale-100"/>
                </div>
                
                <div className="xl:scale-100 flex items-center col-span-6 lg:col-span-6 justify-center md:col-span-5 md:scale-75">
                    <HeroSvg />
                </div>
            </div>
        </div>
    )
};
export default Hero;