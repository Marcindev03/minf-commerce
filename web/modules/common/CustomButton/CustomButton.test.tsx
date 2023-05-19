import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { CustomButton } from "./CustomButton";

describe("Custom button", () => {
  test("should render children", () => {
    const buttonText = "Click me!";
    render(<CustomButton>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(buttonText);
  });

  test("should call onClick prop when called", () => {
    const buttonText = "Click me!";
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });

  test("should be disabled when disabled props is provided", () => {
    const buttonText = "Click me!";
    render(<CustomButton disabled>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("should not fire onClick when disabled", () => {
    const buttonText = "Click me!";
    const handleClick = jest.fn();
    render(
      <CustomButton disabled onClick={handleClick}>
        {buttonText}
      </CustomButton>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("should match snapshot", () => {
    const buttonText = "Click me!";
    const handleClick = jest.fn();
    const tree = renderer
      .create(
        <CustomButton disabled onClick={handleClick}>
          {buttonText}
        </CustomButton>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
