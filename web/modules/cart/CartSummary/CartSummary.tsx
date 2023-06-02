import { Card, CustomButton } from "@modules/common";
import { FC } from "react";

type CartSummaryProps = {
  orderPrice: number;
  deliveryPrice: number;
};

export const CartSummary: FC<CartSummaryProps> = ({
  orderPrice,
  deliveryPrice,
}) => (
  <Card>
    <div className="mb-2 flex justify-between">
      <p className="text-gray-700">Produkty</p>
      <p className="text-gray-700">{orderPrice} PLN</p>
    </div>
    <div className="flex justify-between">
      <p className="text-gray-700">Dostawa</p>
      <p className="text-gray-700">{deliveryPrice} PLN</p>
    </div>
    <hr className="my-4" />
    <div className="flex justify-between mb-4 text-lg font-bold">
      <p>Total</p>
      <p>{(orderPrice + deliveryPrice).toFixed(2)} PLN</p>
    </div>
    <CustomButton href="/cart/order" className="w-full">
      Przejdź dalej
    </CustomButton>
  </Card>
);
