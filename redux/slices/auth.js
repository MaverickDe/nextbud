import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    currentUser:null,
    isLoggedin:false,
    isLoading:false

  };
  
  export const authUserSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
      setcurrentUser: (state, action) => {
        state.currentUser = action.payload;
      },
      setisLoggedin: (state, action) => {
        state.isLoggedin = action.payload;
      },
    },
  });
  
  export const { setcurrentUser,setisLoggedin } = authUserSlice.actions;
  export const authUserReducer = authUserSlice.reducer;