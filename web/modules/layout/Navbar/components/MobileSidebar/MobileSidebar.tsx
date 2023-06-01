import { FC } from "react";
import { HiOutlineShoppingCart, HiOutlineXMark } from "react-icons/hi2";
import { MobileSidebarItem } from "../MobileSidebarItem";

type MobileSidebarItem = {
  name: string;
};

type MobileSidebarProps = {
  items: MobileSidebarItem[];
  isOpen: boolean;
  onClose: () => void;
};

export const MobileSidebar: FC<MobileSidebarProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  if (isOpen) {
    return (
      <section className="fixed top-0 left-0 w-screen h-screen bg-white ease">
        <button className="fixed top-4 right-4" onClick={onClose}>
          <HiOutlineXMark size="2rem" />
        </button>
        <ul className="h-full flex flex-col justify-center items-center">
          <MobileSidebarItem onClick={onClose} href={`/products`}>
            Prezenty
          </MobileSidebarItem>
          {items.map(({ name }) => (
            <MobileSidebarItem
              onClick={onClose}
              key={name}
              href={`/products/${name}`}
            >
              {name}
            </MobileSidebarItem>
          ))}
          <MobileSidebarItem onClick={onClose} href={`/contact`}>
            Kontakt
          </MobileSidebarItem>
          <MobileSidebarItem onClick={onClose} href={`/cart`}>
            <span className="flex items-center">
              <HiOutlineShoppingCart /> <span className="ml-2">Koszyk</span>
            </span>
          </MobileSidebarItem>
        </ul>
      </section>
    );
  }

  return null;
};
