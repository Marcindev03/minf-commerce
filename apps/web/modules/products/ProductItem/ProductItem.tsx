import { FC } from "react";
import Link from "next/link";
import { CustomNextImage } from "@modules/common";
import { Schema } from "@minf-commerce/core";

type ProductItemProps = {} & Schema.ProductSchemaType;

export const ProductItem: FC<ProductItemProps> = ({
  id,
  images,
  name,
  price,
}) => (
  <article className="max-w-[300px] rounded-lg shadow-md overflow-hidden">
    <Link href={`/product/${id}`}>
      <CustomNextImage
        src={images?.[0]}
        alt={name}
        width={300}
        height={100}
        className="object-cover h-80"
      />
      <section className="flex flex-col items-center p-4">
        <p className="text-center">{name}</p>
        <p>{price} PLN</p>
      </section>
    </Link>
  </article>
);
