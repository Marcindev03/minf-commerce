"use client";
import { useGetDeliveryMethodsQuery } from "@modules/api/client";
import { useCartContext } from "@modules/cart";
import { Card } from "@modules/common";
import { EMPTY_DELIVERY_METHOD } from "@modules/mocks";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

type DeliveryFormProps = {};

export const DeliveryForm: FC<DeliveryFormProps> = () => {
  const { setDeliveryMethod } = useCartContext();
  const { data } = useGetDeliveryMethodsQuery();

  const { register, watch } = useForm({
    defaultValues: {
      deliveryMethod: JSON.stringify(EMPTY_DELIVERY_METHOD),
    },
    mode: "onChange",
  });

  useEffect(() => {
    const subscription = watch(({ deliveryMethod }) => {
      const parsedDeliveryMethod = JSON.parse(
        deliveryMethod ?? JSON.stringify(EMPTY_DELIVERY_METHOD)
      );

      setDeliveryMethod(parsedDeliveryMethod);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Card>
      <>
        <p className="text-lg font-bold">Dostawa</p>
        <hr className="my-4" />
        {data?.data.map(({ name, price, id }) => (
          <div key={id} className="mb-2 flex justify-between">
            <div className="flex">
              <input
                className="cursor-pointer"
                type="radio"
                value={JSON.stringify({ name, price, id })}
                {...register("deliveryMethod")}
              />
              <p className="text-gray-700 ml-2">{name}</p>
            </div>
            <p className="text-gray-700">{price.toFixed(2)}PLN</p>
          </div>
        ))}
      </>
    </Card>
  );
};
