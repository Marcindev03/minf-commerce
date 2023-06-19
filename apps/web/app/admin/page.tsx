import { CustomButton } from "@modules/common";
import { FC } from "react";

type AdminPageProps = {};

const AdminPage: FC<AdminPageProps> = () => {
  return (
    <section className="py-10">
      <CustomButton href="/admin/delivery">Ustawienia dostawy</CustomButton>
    </section>
  );
};

export default AdminPage;
