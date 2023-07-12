import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useCustomUserButtonStyles } from "./customUserButton.styles";
import { FC, ReactNode } from "react";

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: ReactNode;
}

export const CustomUserButton: FC<UserButtonProps> = ({
  image,
  name,
  email,
  icon,
  ...others
}) => {
  const { classes } = useCustomUserButtonStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        {/* TODO Custom Next Image */}
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
      </Group>
    </UnstyledButton>
  );
};
