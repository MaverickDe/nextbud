import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
   wallet :{}

  };
  
  export const wallet_slice = createSlice({
    name: "wallet",
      initialState,
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        setwallet: (state, action) => {
           
 
        state.wallet = action.payload;
      },
    //     deletewallet: (state, action) => {


          
    //     state.wallet.splice(action.payload.index, 1);
    //   },
        updatewallet: (state, action) => {


          
        state.wallet={...state.wallet,...action.payload};
      },
  
    },
  });
  
  export const { setwallet ,updatewallet } = wallet_slice.actions;
  export const wallet_Reducer = wallet_slice.reducer;