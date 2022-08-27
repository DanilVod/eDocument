import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  test("render", () => {
    render(
      <Avatar
        image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg"
        size={"small"}
        isActive={false}
      />
    );
    const childrenText = screen.getByTestId(/avatar/i);
    expect(childrenText).toBeInTheDocument();
  });
});
