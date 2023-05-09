"use client";
import { CustomFormControl } from "@modules/common";
import { FC } from "react";
import { useForm } from "react-hook-form";

type DeliveryFormProps = {};

export const DeliveryForm: FC<DeliveryFormProps> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.debug(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <CustomFormControl>
        <>
          <h3 className="text-2xl mb-4">Sposób dostawy</h3>
          <div>
            <input type="radio" {...register("delivery")} value="dpd" />
            <span className="ml-4">Kurier DPD</span>
          </div>
          <div className="mt-2">
            <input type="radio" {...register("delivery")} value="inpost" />
            <span className="ml-4">Kurier InPost</span>
          </div>
        </>
      </CustomFormControl>
    </form>
  );
};
