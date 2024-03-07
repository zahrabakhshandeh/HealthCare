import * as yup from "yup";
// import { toast } from 'react-toastify';

import { IdentifyUserType, LoginDataType } from "@/types";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

export const loginSchema = yup.object({
  codeOne: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeTwo: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeThree: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeFour: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeFive: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
});

const useIdentifyUser = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IdentifyUserType>({
    resolver: yupResolver(loginSchema),
  });

  const { push } = useRouter();
  const handelValueInputs = useCallback((data: IdentifyUserType) => {
    console.log(data);
    push("/register/signup");
  }, []);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useIdentifyUser;
