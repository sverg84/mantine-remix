import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Welcome from "./Welcome";

describe("Welcome component", () => {
  it("has correct Remix theming section link", () => {
    render(<Welcome />);
    expect(screen.getByText("this guide")).toHaveAttribute(
      "href",
      "https://mantine.dev/guides/remix/"
    );
  });
});
