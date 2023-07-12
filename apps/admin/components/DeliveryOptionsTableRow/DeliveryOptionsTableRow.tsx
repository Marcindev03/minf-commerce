import { Button } from "@mantine/core";
import { FC } from "react";

type DeliveryOptionsTableRowProps = {
  id: string;
  name: string;
  price: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const DeliveryOptionsTableRow: FC<DeliveryOptionsTableRowProps> = ({
  id,
  name,
  price,
  onEdit,
  onDelete,
}) => {
  const handleOnEdit = () => onEdit(id);
  const handleOnDelete = () => onDelete(id);

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
