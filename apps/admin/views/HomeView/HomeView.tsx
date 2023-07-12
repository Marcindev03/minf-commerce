import { signOut } from "next-auth/react";
import { Button } from "@mantine/core";
import { CustomNextLink } from "@/components/CustomNextLink/CustomNextLink";

export const HomeView = () => {
  return (
    <>
      <h1>Homeview works!</h1>
      <CustomNextLink href="/admin/dashboard">
        <Button mr={10}>Dashboard</Button>
      </CustomNextLink>
      <Button onClick={() => signOut()}>Logout</Button>
    </>
  );
};
