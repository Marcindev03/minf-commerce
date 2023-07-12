import { FC, useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useCustomLinksGroupStyles } from "./customLinksGroup.styles";
import { CustomNextLink } from "../CustomNextLink/CustomNextLink";

interface LinksGroupProps {
  icon: FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export const LinksGroup: FC<LinksGroupProps> = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}) => {
  const [opened, setOpened] = useState(initiallyOpened || false);
  const { classes, theme } = useCustomLinksGroupStyles();

  const hasLinks = Array.isArray(links);

  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;

  const items = (hasLinks ? links : []).map((link) => (
    <CustomNextLink href={link.link} key={link.label}>
      <Text className={classes.link}>{link.label}</Text>
    </CustomNextLink>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size="1.1rem" />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};
