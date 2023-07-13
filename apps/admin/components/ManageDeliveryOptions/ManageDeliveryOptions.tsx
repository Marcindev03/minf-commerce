import { Button } from "@mantine/core";
import { DeliveryOptionsTable } from "../DeliveryOptionsTable/DeliveryOptionsTable";
import { DeliveryOptionsModals } from "../DeliveryOptionsModals/DeliveryOptionsModals";

export const ManageDeliveryOptions = () => (
  <>
    <Button>Add delivery option</Button>
    <DeliveryOptionsTable />
    <DeliveryOptionsModals />
  </>
);
