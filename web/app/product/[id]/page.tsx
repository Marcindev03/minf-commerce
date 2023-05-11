"use client";
import { useProductQuery } from "@modules/api/client";
import { FC } from "react";
import { CustomNextImage } from "@modules/common";
import { addItemToCart } from "@modules/cart";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
  const { data } = useProductQuery(id);

  const product = data?.data;

  const handleAddToCart = () => addItemToCart(id);

  return (
    <section className="grid grid-cols-10 gap-8">
      <article className="col-span-4 flex justify-center items-center relative h-96">
        <CustomNextImage src={product?.images?.[0] ?? ""} alt={""} fill />
      </article>
      <article className="col-span-6 flex flex-col justify-around">
        <section>
          <h2 className="text-xl">{product?.text_fields.name}</h2>
          <hr />
        </section>
        <p className="text-2xl py-4">Cena: {product?.prices?.[0]} zł</p>
        <section className="flex w-full justify-between">
          <p>Dostępna ilość: {product?.quantity}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Dodaj do koszyka
          </button>
        </section>
      </article>
      <article className="col-span-10">
        <h2 className="text-xl">Opis</h2>
        <hr className="py-2" />
        <p>{product?.text_fields.description}</p>
      </article>
    </section>
  );
};

export default ProductPage;
