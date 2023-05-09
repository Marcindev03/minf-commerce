import { OrderForm } from "@modules/order";
import { FC } from "react";

type OrderPageProps = {};

const OrderPage: FC<OrderPageProps> = () => {
  return (
    <section>
      <article className="max-w-2xl mx-auto">
        <h3 className="text-2xl">Dane do wysyłki</h3>
        <hr className="my-6" />
        <OrderForm />
      </article>
    </section>
  );
};

export default OrderPage;
