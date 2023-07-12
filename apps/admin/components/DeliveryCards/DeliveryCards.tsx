import { SimpleGrid } from "@mantine/core";
import { FC } from "react";
import { AdminCard } from "../AdminCard";
import { cards } from "./cards";

export const DeliveryCards: FC = () => (
  <SimpleGrid cols={2} spacing={"xl"}>
    {cards.map((cardProps) => (
      <AdminCard key={cardProps.title} {...cardProps} />
    ))}
  </SimpleGrid>
);
