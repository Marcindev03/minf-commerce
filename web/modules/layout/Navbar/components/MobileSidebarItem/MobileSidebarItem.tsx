import Link from "next/link";
import { FC, ReactNode } from "react";
import classNames from "classnames";
import { useActiveNavbarItem } from "@modules/hooks";

type MobileSidebarItemProps = {
  href: string;
  onClick?: () => void;
  children: ReactNode;
};

export const MobileSidebarItem: FC<MobileSidebarItemProps> = ({
  href,
  onClick,
  children,
}) => {
  const isActive = useActiveNavbarItem(href);

  return (
    <li className="mb-6 text-xl font-semibold">
      <Link
        onClick={onClick}
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
