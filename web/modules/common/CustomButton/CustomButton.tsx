import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode } from "react";

type CustomButtonProps = {
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const CustomButton: FC<CustomButtonProps> = ({
  href,
  className,
  variant = "primary",
  disabled,
  onClick,
  children,
}) => {
  const Button = () => (
    <button
      className={classNames(" py-2 px-5 border rounded", className, {
        "text-white border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800":
          variant === "primary",
        "text-black bg-white border-blue-400 hover:bg-blue-400 hover:text-white":
          variant === "outline",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <Link href={href}>
        <Button />
      </Link>
    );
  }

  return <Button />;
};
