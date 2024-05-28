import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    user: {},
  };
  
  export const userslice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
      setuser: (state, action) => {
        state.user = action.payload;
      },
    },
  });
  
  export const { setuser } = userslice.actions;
  export const userReducer = userslice.reducer;