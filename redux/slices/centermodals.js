import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState =
{
    cancel: { name: "cancel", action: () => { } },
    ok: { name: "ok", action: () => { } },
    head: null,
    text: null,
    open: false,
    caution:false
};
  
  export const centermodalslice = createSlice({
    name: "centermodal",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        setcentermodalhelper: (state, action) => {
         
            let obj = action.payload
        
            Object.keys(obj).forEach((e) => {
              state[e] = obj[e];
            });

          },
          handleclose : (state,action) => {
          let obj = {
              cancel: { name: "cancel", action: () => {} },
              ok: { name: "ok", action: () => {} },
              head: null,
              text: null,
               open: false,
              caution:false
            }
           
            
            Object.keys(obj).forEach((e) => {
              state[e] = obj[e];
            });
          }
      },
  });
  
  export const { handleclose, setcentermodalhelper} = centermodalslice.actions;
  export const centermodalReducer = centermodalslice.reducer;