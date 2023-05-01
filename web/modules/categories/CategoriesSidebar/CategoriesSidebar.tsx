"use client";
import { useCategoriesQuery } from "@modules/api";
import Link from "next/link";
import { FC } from "react";

type CategoriesSidebarProps = {};

export const CategoriesSidebar: FC<CategoriesSidebarProps> = () => {
  const { data } = useCategoriesQuery();

  return (
    <section>
      <h3 className="font-bold text-2xl">Kategorie</h3>
      <ul>
        {data?.data.map(({ name }) => (
          <li className="mt-4 hover:underline" key={name}>
            <Link href={`/products/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
