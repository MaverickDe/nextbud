import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   currency :[]

  };
  
  export const currency_slice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setcurrency: (state, action) => {
           
            action.payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.currency = action.payload;
      },
        deletecurrency: (state, action) => {


          
        state.currency.splice(action.payload.index, 1);
      },
        updatecurrency: (state, action) => {


          
        state.currency[action.payload.index]={...state.currency[action.payload.index],...action.payload.data};
      },
  
    },
  });
  
  export const { setcurrency ,deletecurrency,updatecurrency } = currency_slice.actions;
  export const currency_Reducer = currency_slice.reducer;