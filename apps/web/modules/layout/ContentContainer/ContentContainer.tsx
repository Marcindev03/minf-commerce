import { FC, ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
};

export const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};
