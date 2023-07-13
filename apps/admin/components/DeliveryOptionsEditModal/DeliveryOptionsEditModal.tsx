import { Modal } from "@mantine/core";
import { FC } from "react";
import { DeliveryOptionsForm } from "../DeliveryOptionsForm/DeliveryOptionsForm";
import { useDeliveryStore } from "@/store/delivery";
import { shallow } from "zustand/shallow";

interface DeliveryOptionsEditModalProps {}

export const DeliveryOptionsEditModal: FC<
  DeliveryOptionsEditModalProps
> = () => {
  const { isOpen, onClose } = useDeliveryStore(
    (state) => ({
      isOpen: state.isEditModalOpen,
      onClose: state.closeEditModal,
    }),
    shallow
  );

  return (
    <Modal opened={isOpen} onClose={onClose} title="Edit Delivery Option">
      <DeliveryOptionsForm />
    </Modal>
  );
};
