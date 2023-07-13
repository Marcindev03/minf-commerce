import { useForm } from "@mantine/form";
import { Button, NumberInput, Stack, TextInput } from "@mantine/core";
import { FC } from "react";
import { useDeliveryStore } from "@/store/delivery";

interface Inputs {
  name: string;
  price: number | "";
}

interface DeliveryOptionsFormProps {}

export const DeliveryOptionsForm: FC<DeliveryOptionsFormProps> = ({}) => {
  const addDeliveryOption = useDeliveryStore(
    (state) => state.addDeliveryOption
  );
  const closeModal = useDeliveryStore((state) => state.closeModal);

  const { onSubmit, getInputProps } = useForm<Inputs>({
    initialValues: {
      name: "",
      price: 0,
    },
    validate: {
      name: (value) =>
        value.length > 3 ? null : "Name should be at least 3 charachters long",
      price: (value) =>
        value !== 0 && value !== "" ? null : "Price can not be zero",
    },
  });

  const handleFormSubmit = (values: Inputs) => {
    addDeliveryOption({
      ...values,
      id: Math.random().toString(),
      price: values.price as number,
    });
    closeModal();
  };

  return (
    <form onSubmit={onSubmit(handleFormSubmit)}>
      <Stack spacing={"xl"}>
        <TextInput
          label="Delivery Option Name"
          placeholder="Type delivery option here"
          withAsterisk
          {...getInputProps("name")}
        />
        <NumberInput
          label="Delivey Option Price"
          placeholder="Type price of delivery option here"
          withAsterisk
          {...getInputProps("price")}
        />
        <Button type="submit">Save</Button>
      </Stack>
    </form>
  );
};
