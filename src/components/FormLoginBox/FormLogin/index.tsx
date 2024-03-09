"use client";
import { useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import CellPhone from "/public/svg/call.svg";
import MainButton from "@/components/MainButton";
import { Controller } from "react-hook-form";
import { toast } from "react-toastify";
import useLogin from "@/validation/Login/useLogin";

const FormLogin = () => {
  const { control, handelValueInputs, errors, handleSubmit } = useLogin();

  const phoneNumberRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    phoneNumberRef.current?.focus();
    if (errors) {
      toast.error(errors.phoneNumber?.message);
    }
  }, [errors]);

  return (
    <>
      <form
        action=""
        className="flex w-full pb-8 md:grid md:grid-cols-2 lg:flex lg:flex-col flex-col gap-6  "
        onSubmit={handleSubmit(handelValueInputs)}
      >
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              firsticonsrc={CellPhone}
              className={`w-full ${
                errors.phoneNumber && "border border-red-600"
              }`}
              type="number"
              placeholder="شماره تماس..."
              {...field}
              ref={phoneNumberRef}
            />
          )}
        />

        <MainButton
          className="h-16 shadow-button-green  bg-[var(--green-btn)]"
          value={"ارسال کد"}
        />
      </form>
    </>
  );
};
export default FormLogin;
