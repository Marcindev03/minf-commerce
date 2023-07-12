import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";
import { useCustomNextLinkStyles } from "./customNextLink.style";

type CustomNextLinkProps = { children: ReactNode } & LinkProps;

export const CustomNextLink: FC<CustomNextLinkProps> = ({
  children,
  ...props
}) => {
  const { classes } = useCustomNextLinkStyles();

  return (
    <Link className={classes.link} {...props}>
      {children}
    </Link>
  );
};
