import SignupBox from "@/components/FormSignUpBox";
import SignUpArt from "/public/svg/signup.svg";
import BackgroundRegister from "@/components/BgRegister";

const SignUpPage = () => {
  return (
    <section className="flex relative h-screen justify-center item lg:justify-start lg:bg-[var(--hr-gray)]">
      <div className="hidden lg:inline-block">
        <div className="absolute flex flex-col gap-4 z-10 top-[10%] right-[10%]">
          <SignUpArt />
          <div className=" relative bottom-0 flex flex-col items-center">
            <span className="text-[var(--hr-gray)] font-semibold text-base">
              سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف.
            </span>
            <span className="text-[var(--hr-gray)]  font-semibold text-base">
              {" "}
              از هر لقمه تا هر قدم، زندگی‌ات را با انتخاب‌های سالم رقم بزن.
            </span>
          </div>
        </div>
        <BackgroundRegister loginMode={false} />
      </div>
      <main className="w-full flex items-center">
        <SignupBox />
      </main>
    </section>
  );
};
export default SignUpPage;
