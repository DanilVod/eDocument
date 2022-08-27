import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("Render", () => {
    render(<Button>Hi</Button>);
    const childrenText = screen.getByText(/Hi/i);
    expect(childrenText).toBeInTheDocument();
  });
});
