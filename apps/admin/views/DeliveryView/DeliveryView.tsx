import { DeliveryCards } from "@/components";
import { Title } from "@mantine/core";

export const DeliveryView = () => (
  <>
    <Title order={1} mb={20}>
      Manage your deliveries here
    </Title>
    <DeliveryCards />
  </>
);
