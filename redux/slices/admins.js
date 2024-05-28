import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
   admins :[]

  };
  
  export const admins_slice = createSlice({
    name: "admins",
      initialState,
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        setadmins: (state, action) => {
           
            action.payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.admins = action.payload;
      },
        deleteadmins: (state, action) => {


          
        state.admins.splice(action.payload.index, 1);
      },
        updateadmins: (state, action) => {


          
        state.admins[action.payload.index]={...state.admins[action.payload.index],...action.payload.data};
      },
  
    },
  });
  
  export const { setadmins ,deleteadmins,updateadmins } = admins_slice.actions;
  export const admins_Reducer = admins_slice.reducer;