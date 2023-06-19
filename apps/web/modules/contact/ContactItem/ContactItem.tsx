import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

type ContactItemProps = {
  Icon: IconType;
  title: string;
  children: ReactNode;
};

export const ContactItem: FC<ContactItemProps> = ({
  Icon,
  title,
  children,
}) => (
  <article className="text-center flex flex-col items-center my-4">
    <section className="bg-blue-400 rounded-xl p-4 w-20">
      <Icon data-testid="contact_item_icon" color="white" size="3rem" />
    </section>
    <h3 className="text-2xl font-bold my-3">{title}</h3>
    {children}
  </article>
);
