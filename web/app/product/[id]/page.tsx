"use client";
import { useProductQuery } from "@modules/api/client";
import { FC, useCallback } from "react";
import { CustomButton, CustomNextImage } from "@modules/common";
import { addItemToCart } from "@modules/cart";
import { ToastContainer, toast } from "react-toastify";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
  const { data } = useProductQuery(id);

  const product = data?.data;

  const handleAddToCart = useCallback(() => {
    addItemToCart(id);
    toast.success("Dodano do koszyka");
  }, [id]);

  return (
    <section className="grid grid-cols-10 gap-8">
      <article className="col-span-4 flex justify-center items-center relative h-96">
        <CustomNextImage src={product?.images?.[0] ?? ""} alt={""} fill />
      </article>
      <article className="col-span-6 flex flex-col justify-around">
        <section>
          <h2 className="text-3xl">{product?.text_fields.name}</h2>
          <hr className="mt-4" />
        </section>
        <p className="text-xl py-4">Cena: {product?.prices?.[0]} zł</p>
        <section className="flex w-full justify-between">
          <p>Dostępna ilość: {product?.quantity}</p>
          <CustomButton onClick={handleAddToCart}>
            Dodaj do koszyka
          </CustomButton>
        </section>
      </article>
      <article className="col-span-10">
        <h2 className="text-xl">Opis</h2>
        <hr className="py-2" />
        <p>{product?.text_fields.description}</p>
      </article>
      <ToastContainer position="bottom-center" autoClose={1800} />
    </section>
  );
};

export default ProductPage;
