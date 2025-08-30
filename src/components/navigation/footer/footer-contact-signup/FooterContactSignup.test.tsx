import React from "react";
import { render, screen } from "@testing-library/react";

import FooterContactSignup from "./FooterContactSignup";

describe("FooterContactSignup", () => {
  it("should render correctly", () => {
    render(<FooterContactSignup />);
    expect(
      screen.getByText("FooterContactSignup Component")
    ).toBeInTheDocument();
  });
});
