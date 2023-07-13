import { Button, Input, NumberInput, Stack } from "@mantine/core";
import { FC } from "react";

interface DeliveryOptionsFormProps {}

export const DeliveryOptionsForm: FC<DeliveryOptionsFormProps> = ({}) => {
  return (
    <Stack spacing={"xl"}>
      <Input placeholder="Delivery Option Name" />
      <NumberInput placeholder="Dselivery Option Price" withAsterisk />
      <Button>Save</Button>
    </Stack>
  );
};
