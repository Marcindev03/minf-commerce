"use client";
import { Card } from "@modules/common";
import { FC } from "react";

type DeliveryFormProps = {};

export const DeliveryForm: FC<DeliveryFormProps> = () => {
  return (
    <Card>
      <>
        <p className="text-lg font-bold">Dostawa</p>
        <hr className="my-4" />
        <div className="mb-2 flex justify-between">
          <div className="flex">
            <input type="radio" value="dpd" />
            <p className="text-gray-700 ml-2">Kurier DPD</p>
          </div>
          <p className="text-gray-700">16.99 PLN</p>
        </div>
        <div className="mb-2 flex justify-between">
          <div className="flex">
            <input type="radio" value="inpost" />
            <p className="text-gray-700 ml-2">Kurier InPost</p>
          </div>
          <p className="text-gray-700">18.99 PLN</p>
        </div>
      </>
    </Card>
  );
};
