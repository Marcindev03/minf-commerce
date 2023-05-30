import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { CustomButton } from "./CustomButton";

const buttonText = "Click me!";
const href = "/products";
const className = "py-10";

describe("Custom button", () => {
  test("should render children", () => {
    render(<CustomButton>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(buttonText);
  });

  test("should call onClick prop when called", () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });

  test("should be disabled when disabled props is provided", () => {
    render(<CustomButton disabled>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("should not fire onClick when disabled", () => {
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

  test("should render a tag when href is provided", () => {
    render(<CustomButton href={href}>{buttonText}</CustomButton>);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", href);
  });

  test("should not render a tag whe href is not provided", () => {
    render(<CustomButton>{buttonText}</CustomButton>);

    const link = screen.queryByRole("link");
    expect(link).not.toBeInTheDocument();
  });

  test("should should add provided className to existing ones", () => {
    render(<CustomButton className={className}>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button.className.split(" ")).toContain(className);
  });

  test("should match snapshot", () => {
    const handleClick = jest.fn();
    const tree = renderer
      .create(
        <CustomButton
          disabled
          onClick={handleClick}
          href={href}
          className={className}
        >
          {buttonText}
        </CustomButton>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
