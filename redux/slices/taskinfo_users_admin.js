import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    taskinfo_users: {
        users: [],
     
    },
    refresh: false,
    

  };
  
  export const taskinfo_users_admin_slice = createSlice({
    name: "taskinfo_users_admin",
      initialState,
      
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        settaskinfo_users: (state, action) => {
            console.log(action,"taskinfo_userss")
            
          
            // action.payload.taskinfo_users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.taskinfo_users = {...action.payload};
      },
        resettaskinfo_users: (state, action) => {
            console.log(action,"taskinfo_userss")
            
          
            // action.payload.taskinfo_users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.taskinfo_users = {users:[]};
      },
        setreferesh: (state, action) => {
         
            
          
            // action.payload.taskinfo_users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.refresh = action.payload
      },
        addtaskinfo_users: (state, action) => {
            console.log(action,"taskinfo_userss")
            
            let load =  state.taskinfo_users.users.filter(e=>!action.payload.users.find(ee=>ee.userId==e.userId) )
            load.push(...action.payload.users)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.taskinfo_users = {...action.payload,  nextpage:action.payload.nextpage>(state.taskinfo_users.nextpage||1)?action.payload.nextpage:(state.taskinfo_users.nextpage||1) , users:load};
      },
        deletetaskinfo_users: (state, action) => {


            // let data = [...state.taskinfo_users];
            // data.splice(index, 1);
            // settaskinfo_users(data);


            // console.log(action,state.taskinfo_users)
            // let load =  state.taskinfo_users.filter(e=>!action.payload.find(ee=>ee.taskinfo_usersId==e.taskinfo_usersId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.taskinfo_users.splice(action.payload.index, 1);
      },
        deletetaskinfo_users_id: (state, action) => {


            // let data = [...state.taskinfo_users];
            // data.splice(index, 1);
            // settaskinfo_users(data);


            // console.log(action,state.taskinfo_users)
            // let load =  state.taskinfo_users.filter(e=>!action.payload.find(ee=>ee.taskinfo_usersId==e.taskinfo_usersId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            let index = state.taskinfo_users.findIndex(e=>e.userId==action.payload.userId)
            if (index && index>=0) {
                
                state.taskinfo_users.users.splice(index, 1);
            }
      },
        updatetaskinfo_users: (state, action) => {


            // let data = [...state.taskinfo_users];
            // data.splice(index, 1);
            // settaskinfo_users(data);


            // console.log(action,state.taskinfo_users)
            // let load =  state.taskinfo_users.filter(e=>!action.payload.find(ee=>ee.taskinfo_usersId==e.taskinfo_usersId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.taskinfo_users.users.splice(action.payload.index, 1);
      },
  
    },
  });
  
  export const { settaskinfo_users ,deletetaskinfo_users,updatetaskinfo_users,addtaskinfo_users,setreferesh, deletetaskinfo_users_id ,resettaskinfo_users} = taskinfo_users_admin_slice.actions;
  export const taskinfo_users_admin_Reducer = taskinfo_users_admin_slice.reducer;