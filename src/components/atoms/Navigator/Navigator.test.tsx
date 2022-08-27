import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navigator } from "./Navigator";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { ROUTES } from "@/routes";

describe("Navigator", () => {
  it("render", async () => {
    render(<Navigator routes={ROUTES} />, { wrapper: MemoryRouter });
    for (let i = 0; i <= ROUTES.length - 1; i++) {
      if (ROUTES[i].isHidden) return "";
      const route = screen.getByTestId(ROUTES[i].name);
      userEvent.click(route);
      expect(screen.getByTestId(ROUTES[i].name)).toBeInTheDocument();
    }
  });
});
