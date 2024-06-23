import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    fullname: "",
    email: "",
    id: "",
    refCode: "",
  };
  
  export const userslice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
      setuser: (state, action) => {
        console.log("ddkdkd")
        state.fullname=action.payload.fullname||""
        state.id=action.payload.id||""
        state.email = action.payload.email || ""
        state.refCode = action.payload.refCode || ""
        
        console.log(state)
      },
    },
  });
  
  export const { setuser } = userslice.actions;
  export const userReducer = userslice.reducer;