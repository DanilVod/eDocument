import { Status } from "./Status";
import { render, screen } from "@testing-library/react";

describe("Status", () => {
  it("Render", () => {
    render(<Status type="New" />);
    const childrenText = screen.getByText(/New/i);
    expect(childrenText).toBeInTheDocument();
  });
});
