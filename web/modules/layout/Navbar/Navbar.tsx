"use client";
import { FC } from "react";
import { ContentContainer } from "../ContentContainer";
import Image from "next/image";
import { logoSvgColorTransparent } from "@modules/assets";
import Link from "next/link";
import { useCategoriesQuery } from "@modules/api";
import { NavbarItem } from "./components";

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  const { data } = useCategoriesQuery();

  return (
    <nav className="pb-16">
      <ContentContainer>
        <section className="py-4 flex justify-end w-full">
          <Link href="/cart" className="hover:underline">
            Koszyk
          </Link>
        </section>
        <section className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={logoSvgColorTransparent}
              width={200}
              alt="MinfCommerce logo"
            />
          </Link>
          <ul className="flex">
            <NavbarItem href="/products">Produkty</NavbarItem>
            {data?.data.map(({ name }) => (
              <NavbarItem key={name} href={`/products/${name}`}>
                {name}
              </NavbarItem>
            ))}
          </ul>
          <article>
            <Link
              href="/contact"
              className="bg-blue-500 py-3 px-5 text-white rounded hover:bg-blue-800"
            >
              Kontakt
            </Link>
          </article>
        </section>
      </ContentContainer>
    </nav>
  );
};
