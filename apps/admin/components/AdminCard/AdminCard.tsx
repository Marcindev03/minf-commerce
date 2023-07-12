import Image from "next/image";
import { Card, Group, Button, Text } from "@mantine/core";
import { CustomNextLink } from "../CustomNextLink/CustomNextLink";
import { FC } from "react";

type AdminCardProps = {
  imgSrc: string;
  alt: string;
  title: string;
  subTitle: string;
  href: string;
  buttonText: string;
};

export const AdminCard: FC<AdminCardProps> = ({
  imgSrc,
  alt,
  title,
  subTitle,
  href,
  buttonText,
}) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      <Image src={imgSrc} height={160} width={420} alt={alt} />
    </Card.Section>

    <Group position="apart" mt="md" mb="xs">
      <Text weight={500}>{title}</Text>
    </Group>

    <Text size="sm" color="dimmed">
      {subTitle}
    </Text>

    <CustomNextLink href={href}>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        {buttonText}
      </Button>
    </CustomNextLink>
  </Card>
);
