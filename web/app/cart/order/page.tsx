import { OrderForm } from "@modules/order";
import { FC } from "react";

type OrderPageProps = {};

const OrderPage: FC<OrderPageProps> = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <h3 className="text-2xl text-center my-6">Dane do wysyłki</h3>
      <hr />
      <OrderForm />
    </section>
  );
};

export default OrderPage;
