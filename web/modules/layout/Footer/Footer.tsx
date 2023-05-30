import { logoSvgWhiteTransparent } from "@modules/assets";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ContentContainer } from "../ContentContainer";

type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  const headingClassName = "text-2xl pb-2";
  const liClassName = "mt-2";

  return (
    <>
      <footer className="bg-slate-800 py-10 mt-10 text-white text-sm">
        <ContentContainer>
          <section className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center text-center">
            <article className="xs:col-span-2 lg:col-span-1">
              <Link href="/">
                <Image
                  src={logoSvgWhiteTransparent}
                  width={150}
                  alt={"MinfCommerceLogo"}
                />
              </Link>
            </article>
            <article>
              <h3 className={headingClassName}>Kontakt</h3>
              <ul>
                <li className={liClassName}>zamówienia@mail.com</li>
                <li className={liClassName}>+48 100200300</li>
                <li className={liClassName}>Strona Kontaktowa</li>
              </ul>
            </article>
            <article>
              <h3 className={headingClassName}>Prawo</h3>
              <ul>
                <li className={liClassName}>Polityka Prywatności</li>
                <li className={liClassName}>Regulamin</li>
                <li className={liClassName}>Formularz zwrotu</li>
              </ul>
            </article>
          </section>
        </ContentContainer>
      </footer>
      <section className="text-center bg-black text-white p-2 text-sm">
        MinfCommerce &copy; 2023
      </section>
    </>
  );
};
