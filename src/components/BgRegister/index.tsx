const BackgroundRegister = (props: { loginMode: boolean }) => {
  return (
    <div
      className={`z-10 w-[75vw] h-screen bg-[#4648bc] ${
        props.loginMode
          ? "lg:flex hidden left-0 rounded-e-none rounded-s-[3.1rem]"
          : "absolute right-0 rounded-e-[3.1rem] rounded-s-none lg:flex hidden"
      } `}
    ></div>
  );
};
export default BackgroundRegister;
