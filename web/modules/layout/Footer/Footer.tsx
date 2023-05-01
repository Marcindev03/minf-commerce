import { logoSvgWhiteTransparent } from "@modules/assets";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  const headingClassName = "text-2xl pb-2";
  const liClassName = "mt-2";

  return (
    <>
      <footer className="bg-slate-800 py-10 mt-10 text-white">
        <section className="max-w-screen-xl mx-auto grid grid-cols-3 justify-items-center items-center">
          <article>
            <Link href="/">
              <Image
                src={logoSvgWhiteTransparent}
                width={300}
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
      </footer>
      <section className="text-center bg-black text-white p-2">
        MinfCommerce &copy; 2023
      </section>
    </>
  );
};
