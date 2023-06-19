"use client";
import { useCategoriesQuery } from "@modules/api/client";
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
      <ul className="flex overflow-x-auto sm:justify-center whitespace-nowrap py-8 hide-scrollbar">
        {data?.data.map(({ name }) => (
          <li
            className={classnames(
              "hover:underline mx-2 border-2 w-fit px-2 border-blue-500 rounded-full text-center lg:text-lg",
              {
                "text-white bg-blue-500":
                  `/products/${name}` === decodeURI(pathname),
              }
            )}
            key={name}
          >
            <Link href={`/products/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
