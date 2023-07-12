import { ManageDeliveryOptions } from "@/components";
import { Title, Stack } from "@mantine/core";

export const ManageDeliveryOptionsView = () => {
  return (
    <Stack spacing={"xl"}>
      <Title order={1} mb={4}>
        Manage Delivery Options Module
      </Title>
      <ManageDeliveryOptions />
    </Stack>
  );
};
