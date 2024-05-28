import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {

counttask:{},

  };
  
  export const stat_user_slice = createSlice({
    name: "stat_user",
      initialState,
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        setcounttask: (state, action) => {
        
        state.counttask = action.payload;
      },
     
    },
  });
  
  export const { setcounttask, } = stat_user_slice.actions;
  export const stat_user_Reducer = stat_user_slice.reducer;