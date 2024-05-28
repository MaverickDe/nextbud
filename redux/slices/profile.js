import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
   data:  {
    phone: { value :"" ,},
    first_name: { value :"" ,},
    last_name: { value :"" ,},
    user_name: { value :"" ,},
   
    email: { value :"" ,timeout1:null ,error:""},

}

  };
  
  export const profile_slice = createSlice({
      name: "profile",
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    initialState,
    reducers: {
        setdata: (state, action) => {
           
           
        state.profile =  {
            phone: { value :action.payload.phone ,},
            first_name: { value :action.payload.first_name ,},
            last_name: { value :action.payload.last_name ,},
            user_name: { value :action.payload.user_name ,},
           
            email: { value :action.payload.email ,},
        
        }
      },
    //     deleteprofile: (state, action) => {


          
    //     state.profile.splice(action.payload.index, 1);
    //   },
        updatedata: (state, action) => {


          
        state.profile[action.payload.key]=state.action.value;
      },
  
    },
  });
  
  export const { setdata ,updatedata } = profile_slice.actions;
  export const profile_Reducer = profile_slice.reducer;