import { inputStyles } from "@modules/styles";
import classNames from "classnames";
import { FC, ReactElement, cloneElement } from "react";
import { FieldError } from "react-hook-form";

type CustomFormControlProps = {
  labelTitle?: string;
  error?: FieldError;
  isRequired?: boolean;
  children: ReactElement;
};

export const CustomFormControl: FC<CustomFormControlProps> = ({
  labelTitle,
  error,
  isRequired = false,
  children,
}) => {
  return (
    <div className="flex flex-col my-2">
      {!!labelTitle && (
        <label>
          {labelTitle} {isRequired && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="my-2">
        {cloneElement(children, {
          className: classNames(inputStyles, {
            "border-red-600": error,
          }),
        })}
      </div>
      {!!error && <span className="text-sm text-red-600">{error.message}</span>}
    </div>
  );
};
