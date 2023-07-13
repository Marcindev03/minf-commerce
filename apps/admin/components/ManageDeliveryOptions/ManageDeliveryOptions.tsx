import { DeliveryOptionsTable } from "../DeliveryOptionsTable/DeliveryOptionsTable";
import { DeliveryOptionsModal } from "../DeliveryOptionsModal/DeliveryOptionsModal";
import { AddDeliveryOptionButton } from "../AddDeliveryOptionButton/AddDeliveryOptionButton";

export const ManageDeliveryOptions = () => (
  <>
    <AddDeliveryOptionButton />
    <DeliveryOptionsTable />
    <DeliveryOptionsModal />
  </>
);
