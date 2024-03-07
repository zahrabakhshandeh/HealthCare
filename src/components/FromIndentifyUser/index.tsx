"use client";
import { useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import CellPhone from "/public/svg/call.svg";
import MainButton from "@/components/MainButton";
import { Controller } from "react-hook-form";
import { toast } from "react-toastify";
import useLogin from "@/validation/Login/useLogin";
const FormIdentifyUser = () => {
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
        className="grid justify-items-center grid-cols-5  w-full pb-8 gap-6  "
      >
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              className={`w-16 h-16`}
              inputClassName={"text-center"}
              {...field}
              ref={phoneNumberRef}
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              className={`w-16 h-16`}
              inputClassName={"text-center"}
              {...field}
              ref={phoneNumberRef}
            />
          )}
        />{" "}
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              className={`w-16 h-16`}
              inputClassName={"text-center"}
              {...field}
              ref={phoneNumberRef}
            />
          )}
        />{" "}
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              className={`w-16 h-16`}
              inputClassName={"text-center"}
              {...field}
              ref={phoneNumberRef}
            />
          )}
        />{" "}
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              className={`w-16 h-16`}
              inputClassName={"text-center"}
              {...field}
              ref={phoneNumberRef}
            />
          )}
        />
        <MainButton
          className="h-16 col-span-5 w-full shadow-button-green  bg-[var(--green-btn)]"
          value={"تایید"}
        />
      </form>
    </>
  );
};

export default FormIdentifyUser;
