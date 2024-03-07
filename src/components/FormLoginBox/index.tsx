import FormLogin from "./FormLogin";

const LoginBox = () => {
  return (
    <div
      className={`rounded-[5rem] bg-white left-0 z-20 relative lg:absolute lg:w-[667px]  py-10 px-12 w-full lg:left-auto lg:bottom-auto lg:right-[5%] lg:top-[25%] gap-10 flex flex-col bottom-0 right-0 top-0 scale-75 `}
    >
      <h2 className="text-2xl font-semibold">ورود | ثبت نام</h2>
      <FormLogin />
    </div>
  );
};
export default LoginBox;
