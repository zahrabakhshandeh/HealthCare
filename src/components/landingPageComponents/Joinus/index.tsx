import MainButton from "@/components/MainButton"
import MainInput from "@/components/MainInput"
import JoinUsArt from "/public/svg/joinUsDoctor.svg"
import BlueBackGround from "/public/svg/joinUs.svg"


const JoinUs = () => {
    return(
        <section>
            <div className="grid lg:grid-cols-6 grid-cols-1 m-16 bg-[var(--primary-blue)] py-10">
                <div className="lg:col-span-2 col-span-full md:flex hidden">
                    <JoinUsArt />
                </div>
                <div className="lg:col-span-4 flex justify-center items-center flex-col gap-y-40 col-span-full">
                    <h2 className="lg:text-9xl pt-10 text-7xl text-white">بیایید شروع کنیم!</h2>
                    <div className="flex justify-center items-center flex-col w-full gap-7">
                        <MainInput className="lg:w-3/5 w-4/5 h-20" placeholder=" شماره تماس..."/>
                        <MainButton value="شروع کنیم" className="bg-[var(--green-btn)] lg:w-3/5 w-4/5 h-20"/> 
                    </div>  
                </div>
            </div>
        </section>
    )
};
export default JoinUs;