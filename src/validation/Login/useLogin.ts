import * as yup from "yup";
// import { toast } from 'react-toastify';

import { LoginDataType } from "@/types";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

export const loginSchema = yup.object({
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
});

const useLogin = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: yupResolver(loginSchema),
  });

  const { push } = useRouter();
  const handelValueInputs = useCallback((data: LoginDataType) => {
    console.log(data);
    push("/register/login/userid");
  }, []);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useLogin;
