import { render, screen } from "@testing-library/react";

import ColorBackgroundAndContent, {
  ColorBackground,
} from "./ColorBackgroundAndContent";
import "@testing-library/jest-dom";

describe("ColorBackgroundAndContent", () => {
  it("should render the provided content", () => {
    render(
      <ColorBackgroundAndContent
        background={ColorBackground.BLUE}
        content={<p>Test Content</p>}
      />
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should apply the correct background image for BLUE", () => {
    const { container } = render(
      <ColorBackgroundAndContent
        background={ColorBackground.BLUE}
        content={<p>Test Content</p>}
      />
    );

    const innerDiv = container.querySelector("div > div");

    expect(innerDiv).toHaveStyle(
      "background-image: url(/images/misc/navy_background.webp)"
    );
  });

  it("should apply the correct background image for YELLOW", () => {
    const { container } = render(
      <ColorBackgroundAndContent
        background={ColorBackground.YELLOW}
        content={<p>Test Content</p>}
      />
    );

    const innerDiv = container.querySelector("div > div");

    expect(innerDiv).toHaveStyle(
      "background-image: url(/images/misc/yellow_background.webp)"
    );
  });

  it("should apply the given className and id", () => {
    const { container } = render(
      <ColorBackgroundAndContent
        background={ColorBackground.BLUE}
        content={<p>Test Content</p>}
        outerClassName="custom-outer-class"
        innerClassName="custom-inner-class"
      />
    );

    const outerDiv = container.querySelector("div");
    const innerDiv = container.querySelector("div > div");

    expect(outerDiv).toHaveClass("custom-outer-class");
    expect(innerDiv).toHaveClass("custom-inner-class");
  });

  it("should render with rounded styles if provided", () => {
    const { container } = render(
      <ColorBackgroundAndContent
        background={ColorBackground.BLUE}
        content={<p>Test Content</p>}
        rounded
      />
    );

    const innerDiv = container.querySelector("div > div");

    expect(innerDiv).toHaveClass("rounded-lg");
  });
});
