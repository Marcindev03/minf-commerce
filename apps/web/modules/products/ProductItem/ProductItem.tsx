import { FC } from "react";
import { Product } from "@modules/api/types";
import Link from "next/link";
import { CustomNextImage } from "@modules/common";

type ProductItemProps = {} & Product;

export const ProductItem: FC<ProductItemProps> = ({
  product_id,
  text_fields: { name },
  prices,
  images,
}) => (
  <article className="max-w-[300px] rounded-lg shadow-md overflow-hidden">
    <Link href={`/product/${product_id}`}>
      <CustomNextImage
        src={images?.[0]}
        alt={name}
        width={300}
        height={100}
        className="object-cover h-80"
      />
      <section className="flex flex-col items-center p-4">
        <p className="text-center">{name}</p>
        <p>{prices?.[0]} PLN</p>
      </section>
    </Link>
  </article>
);
