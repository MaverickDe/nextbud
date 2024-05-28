import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   menu1 :false,
    menu2: false,


  };
  
  export const menu_slice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setmenu1: (state, action) => {
           
            state.menu1 = !state.menu1
      },
        setmenu2: (state, action) => {
            state.menu2 = !state.menu2
        
           
           
      },
   
  
    },
  });
  
  export const { setmenu1,setmenu2 } = menu_slice.actions;
  export const menu_Reducer = menu_slice.reducer;