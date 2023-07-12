import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { useWithLinkStyles } from "./withLink.styles";

interface WithLinkProps {
  href?: string;
  children: ReactNode;
}

export const WithLink: FC<WithLinkProps> = ({ href, children }) => {
  const { classes } = useWithLinkStyles();

  if (href) {
    return (
      <Link href={href} className={classes.link}>
        {children}
      </Link>
    );
  }

  return <>{children}</>;
};
