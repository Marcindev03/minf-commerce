"use client";
import { useCategoriesQuery } from "@modules/api";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import classnames from "classnames";

type CategoriesSidebarProps = {};

export const CategoriesSidebar: FC<CategoriesSidebarProps> = () => {
  const pathname = usePathname();
  const { data } = useCategoriesQuery();

  return (
    <section>
      <h3 className="font-bold text-2xl">Kategorie</h3>
      <ul>
        {data?.data.map(({ name }) => (
          <li
            className={classnames("mt-4 hover:underline", {
              "text-blue-500": `/products/${name}` === pathname,
            })}
            key={name}
          >
            <Link href={`/products/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
