import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { HiArrowPath } from "react-icons/hi2";

type CustomButtonProps = {
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  submitButton?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const CustomButton: FC<CustomButtonProps> = ({
  href,
  className,
  variant = "primary",
  disabled,
  isLoading = false,
  loadingText,
  submitButton = false,
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
        "cursor-not-allowed opacity-50": disabled,
      })}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={submitButton ? "submit" : "button"}
    >
      <>
        {isLoading ? (
          <div className="w-full flex justify-center">
            {loadingText}
            <HiArrowPath
              color="white"
              size="1.5rem"
              className="animate-spin ml-4"
              data-testid="custom_button_loading_icon"
            />
          </div>
        ) : (
          children
        )}
      </>
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
