import { FC } from "react";
import { HiArrowPath } from "react-icons/hi2";
import classNames from "classnames";

type CartLoadingProps = {
  className?: string;
};

export const CartLoading: FC<CartLoadingProps> = ({ className }) => (
  <section
    className={classNames(
      "w-full py-10 flex justify-center items-center lg:mr-6",
      className
    )}
  >
    <HiArrowPath
      size="3rem"
      className="animate-spin ml-4"
      data-testid="custom_button_loading_icon"
    />
  </section>
);
