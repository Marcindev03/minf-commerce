"use client";
import { CustomFormControl } from "@modules/common";
import { FC } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  flatNumber?: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
};

type OrderFormProps = {};

export const OrderForm: FC<OrderFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => console.debug(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:shadow-lg rounded p-6 mx-auto"
    >
      <CustomFormControl error={errors.firstName} isRequired labelTitle="Imię">
        <input
          type="text"
          {...register("firstName", {
            required: "Imię jest wymagane",
          })}
        />
      </CustomFormControl>
      <CustomFormControl
        error={errors.lastName}
        isRequired
        labelTitle="Nazwisko"
      >
        <input
          type="text"
          {...register("lastName", { required: "Nazwisko jest wymagane" })}
        />
      </CustomFormControl>
      <hr className="my-6" />
      <CustomFormControl error={errors.street} isRequired labelTitle="Ulica">
        <input
          type="text"
          {...register("street", {
            required: "Nazwa ulicy jest wymagana",
          })}
        />
      </CustomFormControl>
      <CustomFormControl
        error={errors.houseNumber}
        isRequired
        labelTitle="Number domu / bloku"
      >
        <input
          type="number"
          {...register("houseNumber", {
            valueAsNumber: true,
            required: "Number domu lub bloku jest wymagany",
          })}
        />
      </CustomFormControl>
      <CustomFormControl labelTitle="Number mieszkania (opcjonalnie)">
        <input
          type="number"
          {...register("flatNumber", {
            valueAsNumber: true,
          })}
        />
      </CustomFormControl>
      <CustomFormControl
        error={errors.postalCode}
        isRequired
        labelTitle="Kod pocztowy"
      >
        <input
          type="text"
          {...register("postalCode", {
            pattern: /\d{2}-\d{3}/,
            required: "Kod pocztowy jest wymagany",
          })}
        />
      </CustomFormControl>
      <hr className="my-6" />
      <CustomFormControl
        error={errors.phoneNumber}
        isRequired
        labelTitle="Numer telefonu"
      >
        <input
          type="text"
          {...register("phoneNumber", {
            minLength: 6,
            maxLength: 12,
            required: "Number telefonu jest wymagany",
          })}
        />
      </CustomFormControl>
      <CustomFormControl
        error={errors.email}
        isRequired
        labelTitle="Adres email"
      >
        <input
          type="text"
          {...register("email", {
            pattern: /^\S+@\S+$/i,
            required: "Adres email jest wymagany",
          })}
        />
      </CustomFormControl>
      <input
        type="submit"
        value={"Przejdź do płatności"}
        className="w-full py-4 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-800 mt-6"
      />
    </form>
  );
};
