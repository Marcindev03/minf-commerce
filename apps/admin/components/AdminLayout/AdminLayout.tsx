import { Container, Grid } from "@mantine/core";
import { FC, ReactNode } from "react";
import { NavbarNested } from "../Navbar/Navbar";

type AdminLayoutProps = {
  children: ReactNode;
};

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => (
  <Grid>
    <Grid.Col sm={3} lg={2}>
      <NavbarNested />
    </Grid.Col>
    <Grid.Col sm={8} lg={7}>
      <Container py={24}>{children}</Container>
    </Grid.Col>
  </Grid>
);
