"use client";
import { useCreateOrderMutation } from "@modules/api/client";
import { CustomButton, CustomFormControl } from "@modules/common";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

type Inputs = {
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  flatNumber?: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  email: string;
};

type OrderFormProps = {};

export const OrderForm: FC<OrderFormProps> = () => {
  const router = useRouter();
  const { mutateAsync, isLoading } = useCreateOrderMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      await mutateAsync(
        {
          phone: data.phoneNumber,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          delivery: {
            method: "Express Shipping",
            price: "10.00",
            company: "ABC Company",
            address: `${data.street} ${data.houseNumber}`,
            city: data.city,
            postcode: `${data.postalCode}`,
          },
          products: [
            {
              productId: "86579706",
              quantity: 2,
            },
          ],
        },
        {
          onSuccess(data, variables, context) {
            setTimeout(() => {
              router.push(data.data.paymentUrl);
            }, 5000);
          },
        }
      );

      handlePostOrderSuccess();
    } catch (err) {
      toast.error("Coś poszło nie tak");
    }
  };

  const handlePostOrderSuccess = () =>
    toast.success(
      "Udało się złożyć zamówienie. Za moment zostaniesz przekierowany do strony płatności"
    );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:shadow-lg rounded p-6 mx-auto"
      >
        <CustomFormControl
          error={errors.firstName}
          isRequired
          labelTitle="Imię"
        >
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
              pattern: {
                message: "Kod pocztowy nie jest poprawny",
                value: /\d{2}-\d{3}/,
              },
              required: "Kod pocztowy jest wymagany",
            })}
          />
        </CustomFormControl>
        <CustomFormControl error={errors.city} isRequired labelTitle="Miasto">
          <input
            type="text"
            {...register("city", {
              required: "Miasto jest wymagane",
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
              pattern: {
                value:
                  /^(?:\+48)?\s?(?:(?:(?:\(?\d{2}\)?[-.\s]?)?\d{2,3}[-.\s]?\d{2}[-.\s]?\d{2})|(?:\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3}))$/,
                message: "Number telefonu nie jest poprawny",
              },
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
        <CustomButton
          submitButton
          isLoading={isLoading}
          loadingText="Przetwarzanie zamówienia"
          className="w-full py-4"
        >
          Przejdź do płatności
        </CustomButton>
      </form>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </>
  );
};
