import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import * as utils from "@/data/utils";

import ScrollToButton from "./ScrollToButton";

jest.mock("@/data/utils", () => ({
  scrollToElem: jest.fn(),
}));

describe("ScrollToButton", () => {
  it("renders correctly with provided label", () => {
    render(<ScrollToButton id="test-section" label="Scroll to Section" />);
    expect(screen.getByText("Scroll to Section")).toBeInTheDocument();
  });

  it("calls scrollToElem function when clicked", () => {
    const { scrollToElem } = utils; // Import mocked function

    render(<ScrollToButton id="test-section" label="Scroll to Section" />);
    const button = screen.getByText("Scroll to Section");

    fireEvent.click(button);

    expect(scrollToElem).toHaveBeenCalledWith("test-section", undefined);
  });

  it("applies default props correctly", () => {
    render(<ScrollToButton id="test-section" label="Scroll to Section" />);
    const button = screen.getByText("Scroll to Section");

    expect(button).toHaveClass("bg-yellow-500"); // Assuming Flowbite applies this class for yellow buttons
  });

  it("applies custom props correctly", () => {
    render(
      <ScrollToButton
        id="test-section"
        label="Custom Button"
        color="blue"
        size="lg"
        pill
        className="custom-class"
      />
    );
    const button = screen.getByText("Custom Button");

    expect(button).toHaveClass("custom-class");
  });
});
