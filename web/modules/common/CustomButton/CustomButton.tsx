import { FC, ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
};

export const CustomButton: FC<CustomButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-500 py-3 px-5 text-white rounded hover:bg-blue-800">
      {children}
    </button>
  );
};