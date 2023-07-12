import { DeliveryOptionsEditModal } from "@/DeliveryOptionsEditModal/DeliveryOptionsEditModal";
import { FC } from "react";

interface DeliveryOptionsModalsProps {
  isEditModalOpen: boolean;
  onEditModalClose: () => void;
}

export const DeliveryOptionsModals: FC<DeliveryOptionsModalsProps> = ({
  isEditModalOpen,
  onEditModalClose,
}) => (
  <>
    <DeliveryOptionsEditModal
      isOpen={isEditModalOpen}
      onClose={onEditModalClose}
    />
  </>
);
