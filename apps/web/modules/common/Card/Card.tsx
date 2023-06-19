import classNames from "classnames";
import { FC, ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ className, children }) => (
  <div
    className={classNames(
      "rounded-lg border bg-white p-6 shadow-md w-full",
      className
    )}
  >
    {children}
  </div>
);
