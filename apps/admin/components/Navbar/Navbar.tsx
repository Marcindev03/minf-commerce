import { Navbar, Group, ScrollArea, Title } from "@mantine/core";
import { CustomUserButton } from "../CustomUserButton/CustomUserButton";
import { LinksGroup } from "../CustomLinksGroup/CustomLinksGroup";
import { WithLink } from "../WithLink/WithLink";
import { useNavbarStyles } from "./navbar.styles";
import { navbarItems } from "./navbarItems";

export function NavbarNested() {
  const { classes } = useNavbarStyles();
  const links = navbarItems.map((item) => (
    <WithLink href={item.href}>
      <LinksGroup {...item} key={item.label} />
    </WithLink>
  ));

  return (
    <Navbar p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Title order={4}>MinfCommerce Admin</Title>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <CustomUserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
