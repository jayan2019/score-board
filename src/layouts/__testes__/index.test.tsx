import { waitFor } from "@testing-library/react";

import MainLayout from "..";
import { renderWithProviders } from "../../utils/testUtils";

describe("MainLayout", () => {
  it("should render MainLayout correctly", async () => {
    const { getByText } = renderWithProviders(<MainLayout />);

    await waitFor(() => {
      expect(getByText("SCORE BOARD")).toBeInTheDocument();
    });
  });
});
