import { Table } from "@mantine/core";
import { DeliveryOptionsTableRow } from "../DeliveryOptionsTableRow/DeliveryOptionsTableRow";
import { FC } from "react";

const elements = [
  { id: Math.random().toString(), name: "InPost Kurier", price: 14.55 },
  { id: Math.random().toString(), name: "InPost Paczkomaty", price: 12.55 },
  { id: Math.random().toString(), name: "Kurier DPD", price: 18.55 },
  { id: Math.random().toString(), name: "Kurier Pocztex", price: 17.55 },
];

type DeliveryOptionsTableProps = {};

export const DeliveryOptionsTable: FC<DeliveryOptionsTableProps> = ({}) => {
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
        {elements.map((element) => (
          <DeliveryOptionsTableRow key={element.id} {...element} />
        ))}
      </tbody>
    </Table>
  );
};
