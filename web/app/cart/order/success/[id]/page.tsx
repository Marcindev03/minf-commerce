import { Card } from "@modules/common";
import { FC } from "react";

type SuccessOrderPageProps = {
  params: {
    id: string;
  };
};

const SuccessOrderPage: FC<SuccessOrderPageProps> = ({ params: { id } }) => {
  return (
    <section className="w-full flex justify-center">
      <article className="max-w-sm">
        <Card>
          <h1>Dziękujemy za złożenie zamówienia</h1>
          <h3>Numer zamówienia: {id}</h3>
        </Card>
      </article>
    </section>
  );
};

export default SuccessOrderPage;
