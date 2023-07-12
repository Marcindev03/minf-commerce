import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AdminLayout } from "../AdminLayout/AdminLayout";

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  return <>{children}</>;
};
