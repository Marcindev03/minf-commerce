import { useDeliveryStore } from "@/store/delivery";
import { Button } from "@mantine/core";
import { FC } from "react";

type DeliveryOptionsTableRowProps = {
  id: string;
  name: string;
  price: number;
};

export const DeliveryOptionsTableRow: FC<DeliveryOptionsTableRowProps> = ({
  id,
  name,
  price,
}) => {
  const openEditModal = useDeliveryStore((state) => state.openEditModal);

  const handleOnEdit = () => {
    openEditModal();
  };
  const handleOnDelete = () => {};

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <Button color="violet" onClick={handleOnEdit}>
          Edit
        </Button>
      </td>
      <td>
        <Button color="red" onClick={handleOnDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
