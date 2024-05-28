import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    users: {
        users: [],
     
    },
    refresh: false,
    

  };
  
  export const users_admin_slice = createSlice({
    name: "users_admin",
      initialState,
      
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        setusers: (state, action) => {
           
            
          
            // action.payload.users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.users = {...action.payload};
      },
        setreferesh: (state, action) => {
         
            
          
            // action.payload.users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.refresh = action.payload
      },
        addusers: (state, action) => {
        
            
            let load =  state.users.users.filter(e=>!action.payload.users.find(ee=>ee.userId==e.userId) )
            load.push(...action.payload.users)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.users = {...action.payload,  nextpage:action.payload.nextpage>(state.users.nextpage||1)?action.payload.nextpage:(state.users.nextpage||1) , users:load};
      },
        deleteusers: (state, action) => {


            // let data = [...state.users];
            // data.splice(index, 1);
            // setusers(data);


            // console.log(action,state.users)
            // let load =  state.users.filter(e=>!action.payload.find(ee=>ee.usersId==e.usersId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.users.users.splice(action.payload.index, 1);
      },
        deleteusers_id: (state, action) => {


            // let data = [...state.users];
            // data.splice(index, 1);
            // setusers(data);


            // console.log(action,state.users)
            // let load =  state.users.filter(e=>!action.payload.find(ee=>ee.usersId==e.usersId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            let index = state.users.users.findIndex(e=>e.userId==action.payload.userId)
            if (index && index>=0) {
                
                state.users.users.splice(index, 1);
            }
      },
        updateusers: (state, action) => {


            // let data = [...state.users];
            // data.splice(index, 1);
            // setusers(data);


            // console.log(action,state.users)
            // let load =  state.users.filter(e=>!action.payload.find(ee=>ee.usersId==e.usersId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.users.users.splice(action.payload.index, 1);
      },
  
    },
  });
  
  export const { setusers ,deleteusers,updateusers,addusers,setreferesh, deleteusers_id } = users_admin_slice.actions;
  export const users_admin_Reducer = users_admin_slice.reducer;