"use client";
import { CustomButton } from "@modules/common";
import { AdminDeliveryForm, AdminDeliveryTable } from "@modules/delivery";
import classNames from "classnames";
import { FC, useState } from "react";

type AdminDeliveryPageProps = {};

const AdminDeliveryPage: FC<AdminDeliveryPageProps> = () => {
  const [isDeliveryFormOpen, setIsDeliveryFormOpen] = useState(false);

  const handleAddDeliveryOptionButtonClick = () => setIsDeliveryFormOpen(true);

  const handleAdminDeliveryFormClose = () => setIsDeliveryFormOpen(false);

  return (
    <section>
      <article
        className={classNames({
          hidden: isDeliveryFormOpen,
        })}
      >
        <AdminDeliveryTable />
      </article>
      <article
        className={classNames("w-full flex justify-center py-10", {
          hidden: isDeliveryFormOpen,
        })}
      >
        <CustomButton onClick={handleAddDeliveryOptionButtonClick}>
          Dodaj nową opcję dostawy
        </CustomButton>
      </article>
      <article
        className={classNames({
          hidden: !isDeliveryFormOpen,
        })}
      >
        <AdminDeliveryForm onClose={handleAdminDeliveryFormClose} />
      </article>
    </section>
  );
};

export default AdminDeliveryPage;
