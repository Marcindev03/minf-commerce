import { useCreateDeliveryMethodMutation } from "@modules/api/client";
import { DeliveryMethodSchemaType } from "@modules/api/server";
import { CustomButton, CustomFormControl } from "@modules/common";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

type AdminDeliveryFormProps = {
  onClose?: () => void;
};

export const AdminDeliveryForm: FC<AdminDeliveryFormProps> = ({ onClose }) => {
  const { mutateAsync, isLoading } = useCreateDeliveryMethodMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryMethodSchemaType>();

  const onSubmit = async (data: DeliveryMethodSchemaType) => {
    try {
      await mutateAsync(data);
      toast.success("Udało się dodać opcję dostawy");

      toast.onChange(({ status }) => status === "removed" && onClose?.());
    } catch (err) {
      toast.error("Coś poszło nie tak");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomFormControl
          error={errors.name}
          isRequired
          labelTitle="Nazwa opcji dostawy"
        >
          <input
            type="text"
            {...register("name", {
              required: "Nazwa opcji dostawy jest wymagana",
            })}
          />
        </CustomFormControl>
        <CustomFormControl
          error={errors.price}
          isRequired
          labelTitle="Cena opcji dostawy"
        >
          <input
            type="number"
            {...register("price", {
              valueAsNumber: true,
              required: "Cena opcji dostawy jest wymagana",
            })}
          />
        </CustomFormControl>
        <div className="w-full flex justify-between">
          <CustomButton className="bg-red-400 border-red-400" onClick={onClose}>
            Zamknij formularz
          </CustomButton>
          <CustomButton
            submitButton
            isLoading={isLoading}
            loadingText="Dodawanie opcji dostawy"
            className=""
          >
            Dodaj opcję dostawy
          </CustomButton>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
