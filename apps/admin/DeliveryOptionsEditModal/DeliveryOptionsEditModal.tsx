import { Modal } from "@mantine/core";
import { FC } from "react";

interface DeliveryOptionsEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeliveryOptionsEditModal: FC<DeliveryOptionsEditModalProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal opened={isOpen} onClose={onClose} title="Edit Delivery Option"></Modal>
);
