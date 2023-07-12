import { Button } from "@mantine/core";
import { DeliveryOptionsTable } from "../DeliveryOptionsTable/DeliveryOptionsTable";
import { useDisclosure } from "@mantine/hooks";
import { DeliveryOptionsModals } from "../DeliveryOptionsModals/DeliveryOptionsModals";

export const ManageDeliveryOptions = () => {
  const modalControls = {
    edit: useDisclosure(false),
    delete: useDisclosure(false),
  };

  const handleDeliveryOptionsEdit = (id: string) => {
    modalControls.edit[1].open();
  };

  return (
    <>
      <Button>Add delivery option</Button>
      <DeliveryOptionsTable onEdit={handleDeliveryOptionsEdit} />
      <DeliveryOptionsModals
        isEditModalOpen={modalControls.edit[0]}
        onEditModalClose={modalControls.edit[1].close}
      />
    </>
  );
};
