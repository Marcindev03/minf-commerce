import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ContactView } from "./ContactView";
import contactInfo from "@modules/config/contact.json";

describe("Contact view", () => {
  test("should render correctly", () => {
    render(<ContactView />);

    // TODO make it dynamic
    const companyName = screen.getByText(contactInfo.companyName);
    expect(companyName).toBeInTheDocument();
    const nip = screen.getByText(`NIP: ${contactInfo.nip}`);
    expect(nip).toBeInTheDocument();
    const addressLine1 = screen.getByText(contactInfo.addressLine1);
    expect(addressLine1).toBeInTheDocument();
    const addressLine2 = screen.getByText(contactInfo.addressLine2);
    expect(addressLine2).toBeInTheDocument();
    const email = screen.getByText(contactInfo.email);
    expect(email).toBeInTheDocument();
    const phoneNumber = screen.getByText(contactInfo.phoneNumber);
    expect(phoneNumber).toBeInTheDocument();
  });

  test("should match snapshot", () => {
    const tree = renderer.create(<ContactView />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
