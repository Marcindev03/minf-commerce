import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "@mantine/core";

export const HomeView = () => {
  return (
    <>
      <h1>Homeview works!</h1>
      <Link href="/admin/dashboard">
        <Button mr={10}>Dashboard</Button>
      </Link>
      <Button onClick={() => signOut()}>Logout</Button>
    </>
  );
};
