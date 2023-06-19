import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { CustomButton } from "./CustomButton";

const buttonText = "Click me!";
const buttonLoadingText = "loading...";
const href = "/products";
const className = "py-10";
const buttonPrimaryStyles =
  "text-white border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800";
const buttonOutlineStyles =
  "text-black bg-white border-blue-400 hover:bg-blue-400 hover:text-white";
const buttonDisabledStyles = "cursor-not-allowed opacity-50";

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

  test("should apply disabled styles when disabled prop is provided", () => {
    render(<CustomButton disabled>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button.className).toContain(buttonDisabledStyles);
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

  test("should apply primary styles defaulty", () => {
    render(<CustomButton>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button.className).toContain(buttonPrimaryStyles);
  });

  test("should apply outline styles when variant is outline", () => {
    render(<CustomButton variant="outline">{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button.className).toContain(buttonOutlineStyles);
  });

  test("should have button type defaulty ", () => {
    render(<CustomButton>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });

  test("should have submit type when submitButton prop is provided", () => {
    render(<CustomButton submitButton>{buttonText}</CustomButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("should render loading when isLoading prop is true", () => {
    render(<CustomButton isLoading>{buttonText}</CustomButton>);

    const loadingIcon = screen.getByTestId("custom_button_loading_icon");
    expect(loadingIcon).toBeInTheDocument();
  });

  test("should render loadingText when loadingText prop is true", () => {
    render(
      <CustomButton isLoading loadingText={buttonLoadingText}>
        {buttonText}
      </CustomButton>
    );

    const loadingElement = screen.getByText(buttonLoadingText);
    expect(loadingElement).toBeInTheDocument();
  });

  test("should not render loadingText when isLoading prop is not passed", () => {
    render(
      <CustomButton loadingText={buttonLoadingText}>{buttonText}</CustomButton>
    );

    const loadingTextElement = screen.queryByText(buttonLoadingText);
    expect(loadingTextElement).toBeNull();
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
