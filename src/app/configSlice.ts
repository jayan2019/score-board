import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "./store";

type ThemeType = "DARK" | "LIGHT";

interface ConfigState {
  theme: ThemeType;
}

const initialState: ConfigState = {
  theme: "LIGHT",
};

export const counterSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = counterSlice.actions;

export const selectTheme = (state: RootState) => state.configs.theme;

export default counterSlice.reducer;
