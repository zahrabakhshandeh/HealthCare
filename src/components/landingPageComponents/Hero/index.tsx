import MainButton from "@/components/MainButton";
import HeroSvg from "/public/svg/hero.svg"

const Hero = () => {
    return(
        <div className="flex justify-center items-center">
            <div className="grid lg:grid-cols-12 grid-cols-2 gap-16 bg-[var(--primary-blue)] w-full">

                <div className="lg:col-span-3 col-span-2 flex justify-center items-center flex-col">
                    <h2 className="text-white text-5xl p-10">
                        سلامتی «شما» 
                        برای «ما»
                        مهم است.
                    </h2>
                    <MainButton value="شروع کنیم!" className="bg-[var(--green-btn)] w-1/3 h-20 lg:mx-36 hover:bg-[var(--hover-green)] hover:duration-100 xl:scale-95 2xl:scale-100 scale-90"/>
                </div>
                
                <div className="lg:mt-32 lg:col-span-9 px-0 col-span-2 flex justify-center">
                    <HeroSvg />
                </div>
            </div>
        </div>
    )
};
export default Hero;