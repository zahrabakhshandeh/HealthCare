import LoginBox from "@/components/FormLoginBox";
import LoginArt from "/public/svg/loginArt.svg";
import BackgroundRegister from "@/components/BgRegister";
import FormLogin from "@/components/FormLoginBox/FormLogin";

const Login = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">ورود | ثبت نام</h2>
      <FormLogin />
    </>
  );
};
export default Login;
