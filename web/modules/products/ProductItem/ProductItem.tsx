import { FC } from "react";
import Image from "next/image";
import { Product } from "@prisma/client";
import Link from "next/link";

type ProductItemProps = {} & Product;

export const ProductItem: FC<ProductItemProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => (
  <article className="rounded-lg shadow-md overflow-hidden">
    <Link href={`/products/${id}`}>
      <Image
        src={imageUrl}
        alt={name}
        width={320}
        height={100}
        className="object-cover h-80"
      />
      <section className="flex flex-col items-center p-4">
        <p>{name}</p>
        <p>{price} PLN</p>
      </section>
    </Link>
  </article>
);
