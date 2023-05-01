import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import classNames from "classnames";

type NavbarItemProps = {
  children: string;
  href: string;
};

export const NavbarItem: FC<NavbarItemProps> = ({ children, href }) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <li className="mx-3">
      <Link
        href={href}
        className={classNames("hover:text-blue-500", {
          "text-blue-500": isActive,
        })}
      >
        {children}
      </Link>
    </li>
  );
};
