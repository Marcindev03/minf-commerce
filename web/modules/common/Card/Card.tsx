import { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ children }) => (
  <div className="rounded-lg border bg-white p-6 shadow-md w-full">
    {children}
  </div>
);
