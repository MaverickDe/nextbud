import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    image: [],
    imagememo: [],
    refresh :false
  };
  
  export const imageslice = createSlice({
    name: "image",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
      setimage: (state, action) => {
        state.image = action.payload;
      },
      setreferesh: (state, action) => {
     
        
      
        // action.payload.users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.refresh = !state.refresh
  },
        addimage: (state, action) => {
            // let l =state.image.length  + action.payload.images.length
            let l2 = state.image.length
            // console.log(l,state.image.length,l2)
            if (l2 >= 5) {
             state.image.splice(0,1)
         }
        state.image.push(...action.payload.images);
      },
      deleteimage: (state, action) => {
        state.image.splice(action.payload.index,1);
      },
      setimagememo: (state, action) => {
       
        state.imagememo = action.payload;
      },
      addimagememo: (state, action) => {
        state.imagememo.push(...action.payload.images);
      },
      deleteimagememo: (state, action) => {
        state.imagememo.splice(action.payload.id,1);
      },
    },
  });
  
  export const { setimage,addimage,deleteimage ,setimagememo,addimagememo,deleteimagememo } = imageslice.actions;
  export const imageReducer = imageslice.reducer;