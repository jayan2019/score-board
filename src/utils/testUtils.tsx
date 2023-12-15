import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";

import configReducer from "../app/configSlice";

export function renderWithProviders(
  ui: React.ReactElement,
  store = configureStore({ reducer: { configs: configReducer } })
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper }) };
}
