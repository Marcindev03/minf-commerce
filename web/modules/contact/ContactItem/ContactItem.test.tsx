import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ContactItem } from "./ContactItem";
import { HiAcademicCap } from "react-icons/hi2";

const title = "Awesome Title!";
const children = "Awesome text!";
const Icon = HiAcademicCap;

describe("Contact item", () => {
  test("should render children", () => {
    render(
      <ContactItem Icon={Icon} title={title}>
        {children}
      </ContactItem>
    );

    const text = screen.getByText(children);
    expect(text).toBeInTheDocument();
  });

  test("should render provided title", () => {
    render(
      <ContactItem Icon={Icon} title={title}>
        {children}
      </ContactItem>
    );

    const heading = screen.getByRole("heading", { name: title });
    expect(heading).toBeInTheDocument();
  });

  test("should render icon", () => {
    render(
      <ContactItem Icon={Icon} title={title}>
        {children}
      </ContactItem>
    );

    const icon = screen.getByTestId("contact_item_icon");
    expect(icon).toBeInTheDocument();
  });

  test("should match snapshot", () => {
    const tree = renderer
      .create(
        <ContactItem Icon={Icon} title={title}>
          {children}
        </ContactItem>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
