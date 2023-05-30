import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode } from "react";

type CustomButtonProps = {
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const CustomButton: FC<CustomButtonProps> = ({
  href,
  className,
  disabled,
  onClick,
  children,
}) => {
  const Button = () => (
    <button
      className={classNames(
        "bg-blue-500 py-3 px-5 text-white rounded hover:bg-blue-800",
        className
      )}
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
