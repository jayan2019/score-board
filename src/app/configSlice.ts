import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "./store";

interface ConfigState {
  theme: string;
}

const initialState: ConfigState = {
  theme: "DARK",
};

export const counterSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = counterSlice.actions;

export const selectTheme = (state: RootState) => state.configs.theme;

export default counterSlice.reducer;
