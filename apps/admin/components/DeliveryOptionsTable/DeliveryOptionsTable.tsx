import { Table } from "@mantine/core";
import { DeliveryOptionsTableRow } from "../DeliveryOptionsTableRow/DeliveryOptionsTableRow";
import { FC } from "react";
import { useDeliveryStore } from "@/store/delivery";

type DeliveryOptionsTableProps = {};

export const DeliveryOptionsTable: FC<DeliveryOptionsTableProps> = () => {
  const deliveyOptions = useDeliveryStore((state) => state.deliveryOptions);

  return (
    <Table>
      <thead>
        <tr>
          <th>Delivery option name</th>
          <th>Delivery option price</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {deliveyOptions.map((deliveyOption) => (
          <DeliveryOptionsTableRow key={deliveyOption.id} {...deliveyOption} />
        ))}
      </tbody>
    </Table>
  );
};
