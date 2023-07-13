import { useDeliveryStore } from "@/store/delivery";
import { Button } from "@mantine/core";
import { FC } from "react";

interface AddDeliveryOptionButtonProps {}

export const AddDeliveryOptionButton: FC<AddDeliveryOptionButtonProps> = () => {
  const openModal = useDeliveryStore((state) => state.openModal);
  const setModalTitle = useDeliveryStore((state) => state.setModalTitle);

  const handleButtonClick = () => {
    setModalTitle("Add Delivery Option");
    openModal();
  };

  return <Button onClick={handleButtonClick}>Add delivery option</Button>;
};
