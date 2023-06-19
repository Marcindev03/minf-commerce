"use client";
import { FC, useMemo } from "react";
import { ContentContainer } from "../ContentContainer";
import Image from "next/image";
import { logoSvgColorTransparent } from "@modules/assets";
import Link from "next/link";
import { useCategoriesQuery } from "@modules/api/client";
import { NavbarItem } from "./components";
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import { MobileSidebar } from "./components/MobileSidebar";
import { useDisclosure } from "@modules/hooks";
import { CustomButton } from "@modules/common";

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  const { data } = useCategoriesQuery();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = useMemo(
    () => data?.data.map(({ name }) => ({ name })) ?? [],
    [data]
  );

  return (
    <nav>
      <ContentContainer>
        <article className="flex xs:flex-col p-4 lg:flex-row xs:justify-around xs:items-center xs:p-6 relative">
          <section className="xs:w-full lg:w-auto flex justify-center">
            <Link href="/">
              <Image
                src={logoSvgColorTransparent}
                width={200}
                alt="MinfCommerce logo"
              />
            </Link>
          </section>
          <section
            className="absolute top-4 right-4 xs:hidden"
            onClick={onOpen}
          >
            <HiBars3 size={"2rem"} />
          </section>
          <section className="hidden w-full lg:w-auto xs:flex justify-around p-4">
            <ul className="flex items-center justify-around">
              <NavbarItem href={`/products`}>Produkty</NavbarItem>
              {navItems.map(({ name }) => (
                <NavbarItem key={name} href={`/products/${name}`}>
                  {name}
                </NavbarItem>
              ))}
            </ul>
          </section>
          <section className="flex">
            <CustomButton href="/contact" className="hidden lg:block mr-2">
              Kontakt
            </CustomButton>
            <CustomButton
              href="/cart"
              variant="outline"
              className="hidden lg:block"
            >
              <span className="flex items-center">
                <HiOutlineShoppingCart /> <span className="ml-2">Koszyk</span>
              </span>
            </CustomButton>
          </section>
        </article>
      </ContentContainer>
      <MobileSidebar items={navItems} isOpen={isOpen} onClose={onClose} />
    </nav>
  );
};
