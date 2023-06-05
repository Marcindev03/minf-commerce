"use client";
import { useProductQuery } from "@modules/api/client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { CustomButton, CustomNextImage } from "@modules/common";
import { ToastContainer, toast } from "react-toastify";
import classNames from "classnames";
import { useCartContext } from "@modules/cart";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
  const pageRef = useRef<HTMLElement>(null);

  const { addToCart } = useCartContext();

  const { data } = useProductQuery(id);

  const [isAddToCartButtomFixed, setIsAddToCartButtomFixed] = useState(true);

  const product = data?.data;

  const handleAddToCart = useCallback(() => {
    addToCart({ productId: product?.product_id ?? "", quantity: 1 });
    toast.success("Dodano do koszyka");
  }, [addToCart, product?.product_id]);

  useEffect(() => {
    const handleWindowScroll = () => {
      const pageBottom = pageRef?.current?.getBoundingClientRect()
        .bottom as number;

      if (window.innerWidth > 1024) {
        setIsAddToCartButtomFixed(false);
        return;
      }

      if (pageBottom >= window.innerHeight) {
        setIsAddToCartButtomFixed(true);
      } else {
        setIsAddToCartButtomFixed(false);
      }
    };

    handleWindowScroll();

    window.addEventListener("scroll", handleWindowScroll);
    window.addEventListener("resize", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleWindowScroll);
    };
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <section className="lg:col-span-2">
        <h2 className="text-3xl text-center">{product?.text_fields.name}</h2>
        <hr className="my-4" />
      </section>
      <article className="flex justify-center lg:justify-normal">
        <CustomNextImage
          src={product?.images?.[0] ?? ""}
          alt={""}
          width={600}
          height={100}
        />
      </article>
      <article className="px-4">
        <p className="text-xl">Cena: {product?.prices?.[0]} zł</p>
        <p className="my-2">Dostępna ilość: {product?.quantity}</p>
        <hr className="my-3" />
        <CustomButton className="hidden lg:block" onClick={handleAddToCart}>
          Dodaj do koszyka
        </CustomButton>
      </article>

      <article
        className="px-4 pb-[74px] relative rounded-sm xl:px-0 lg:col-span-2 break-words"
        ref={pageRef}
      >
        <h2 className="text-3xl">Opis</h2>
        <hr className="my-4" />
        <p className="text-justify">{product?.text_fields.description}</p>
        <article
          className={classNames("right-0 bottom-0 w-fit p-4", {
            fixed: isAddToCartButtomFixed,
            absolute: !isAddToCartButtomFixed,
          })}
        >
          <CustomButton className="lg:hidden" onClick={handleAddToCart}>
            Dodaj do koszyka
          </CustomButton>
        </article>
      </article>

      <ToastContainer position="bottom-center" autoClose={1800} />
    </section>
  );
};

export default ProductPage;
