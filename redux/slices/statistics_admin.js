import { createSlice } from "@reduxjs/toolkit";

const initialState = {

counttask:{},
countusers:0
  };
  
  export const stat_admin_slice = createSlice({
    name: "stat_admin",
    initialState,
    reducers: {
        setcounttask: (state, action) => {
            console.log(action.payload)
        state.counttask = action.payload;
      },
      setcountusers: (state, action) => {
        state.countusers = action.payload;
      },
    },
  });
  
  export const { setcounttask,setcountusers } = stat_admin_slice.actions;
  export const stat_admin_Reducer = stat_admin_slice.reducer;