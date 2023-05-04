import { CustomNextImage } from "@modules/common";
import { productsLayoutImage } from "@modules/assets";
import { FC, ReactNode } from "react";

type CartLayoutProps = {
  children: ReactNode;
};

const CartLayout: FC<CartLayoutProps> = ({ children }) => {
  return (
    <>
      <section>
        <CustomNextImage
          src={productsLayoutImage}
          alt={"Cart Layout Image"}
          width={1280}
          className="max-h-80 object-cover mb-12"
          priority
          loading="eager"
        />
      </section>
      {children}
    </>
  );
};

export default CartLayout;
