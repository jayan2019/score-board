import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

describe("App", () => {
  it("should render correctly", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      expect(getByText("SCORE BOARD")).toBeInTheDocument();
    });
  });
});
