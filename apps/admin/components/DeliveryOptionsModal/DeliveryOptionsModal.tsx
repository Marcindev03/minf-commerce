import { Modal } from "@mantine/core";
import { FC } from "react";
import { DeliveryOptionsForm } from "../DeliveryOptionsForm/DeliveryOptionsForm";
import { useDeliveryStore } from "@/store/delivery";
import { shallow } from "zustand/shallow";

interface DeliveryOptionsModalProps {}

export const DeliveryOptionsModal: FC<DeliveryOptionsModalProps> = () => {
  const { isOpen, onClose, title } = useDeliveryStore(
    (state) => ({
      isOpen: state.isModalOpen,
      onClose: state.closeModal,
      title: state.modalTitle,
    }),
    shallow
  );

  return (
    <Modal opened={isOpen} onClose={onClose} title={title}>
      <DeliveryOptionsForm />
    </Modal>
  );
};
