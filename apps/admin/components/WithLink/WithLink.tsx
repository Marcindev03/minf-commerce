import React, { FC, ReactNode } from "react";
import { CustomNextLink } from "../CustomNextLink/CustomNextLink";

interface WithLinkProps {
  href?: string;
  children: ReactNode;
}

export const WithLink: FC<WithLinkProps> = ({ href, children }) => {
  if (href) {
    return <CustomNextLink href={href}>{children}</CustomNextLink>;
  }

  return <>{children}</>;
};
