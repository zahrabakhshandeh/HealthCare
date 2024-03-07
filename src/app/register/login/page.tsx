import LoginBox from "@/components/FormLoginBox";
import LoginArt from "/public/svg/loginArt.svg";
import BackgroundRegister from "@/components/BgRegister";

const Login = () => {
  return (
    <section className="flex relative items-center h-screen justify-center item lg:justify-start lg:bg-[var(--hr-gray)]">
      <main className="w-full">
        <LoginBox />
      </main>
      <div className="hidden lg:inline-block">
        <div className="absolute flex flex-col gap-4 z-10 top-[15%] left-[8%]">
          <LoginArt />
          <div className=" relative bottom-0 flex flex-col items-center">
            <span className="text-white font-semibold w-3/5 text-center text-base">
              سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف. از هر لقمه تا هر قدم،
              زندگی‌ات را با انتخاب‌های سالم رقم بزن.
            </span>
          </div>
        </div>
        <BackgroundRegister loginMode />
      </div>
    </section>
  );
};
export default Login;
