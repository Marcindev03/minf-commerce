import { Card, CustomButton } from "@modules/common";
import { FC } from "react";
import { useCartContext } from "../CartContext";

type CartSummaryProps = {};

export const CartSummary: FC<CartSummaryProps> = ({}) => {
  const {
    orderSum,
    deliveryMethod: { price, id },
  } = useCartContext();

  return (
    <Card>
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Produkty</p>
        <p className="text-gray-700">{orderSum} PLN</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Dostawa</p>
        <p className="text-gray-700">{price} PLN</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between mb-4 text-lg font-bold">
        <p>Total</p>
        <p>{(orderSum + price).toFixed(2)} PLN</p>
      </div>
      <CustomButton
        href="/cart/order"
        className="w-full"
        disabled={id === 0 || null || undefined}
      >
        Przejdź dalej
      </CustomButton>
    </Card>
  );
};
