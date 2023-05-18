import { FC, ReactNode } from "react";

type CustomButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const CustomButton: FC<CustomButtonProps> = ({
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      className="bg-blue-500 py-3 px-5 text-white rounded hover:bg-blue-800"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
