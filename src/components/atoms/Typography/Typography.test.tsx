import { Typography } from "./Typography";
import { render, screen } from "@testing-library/react";

describe("Typography", () => {
  it("Render", () => {
    render(<Typography>Test</Typography>);
    const childrenText = screen.getByText(/Test/i);
    expect(childrenText).toBeInTheDocument();
  });
});
