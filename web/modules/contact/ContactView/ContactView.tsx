import { FC } from "react";
import {
  HiBuildingOffice,
  HiMapPin,
  HiEnvelope,
  HiPhone,
} from "react-icons/hi2";
import contactInfo from "@modules/config/contact.json";
import { ContactItem } from "../ContactItem";

type ContactViewProps = {};

export const ContactView: FC<ContactViewProps> = () => {
  const { companyName, nip, addressLine1, addressLine2, email, phoneNumber } =
    contactInfo;

  return (
    <section className="flex flex-col lg:flex-row lg:items-start justify-around items-center py-10">
      <ContactItem Icon={HiBuildingOffice} title="Informacje o firmie">
        <p>{companyName}</p>
        <p>NIP: {nip}</p>
      </ContactItem>
      <ContactItem Icon={HiMapPin} title="Odbiór osobisty">
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
      </ContactItem>
      <ContactItem Icon={HiEnvelope} title="Email">
        <p>{email}</p>
      </ContactItem>
      <ContactItem Icon={HiPhone} title="Telefon">
        <p>{phoneNumber}</p>
      </ContactItem>
    </section>
  );
};
