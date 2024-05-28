import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    task: {
        usertask:[]
    }
    ,refresh:false

  };
  
  export const usertask_user_slice = createSlice({
      name: "usertask_user",
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    initialState,
    reducers: {
        addusertask: (state, action) => {
      
            let load =  state.task.usertask.filter(e=>!action.payload.usertask.find(ee=>ee.usertaskId==e.usertaskId) )
            load.push(...action.payload.usertask)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            state.task = {...action.payload,  nextpage:action.payload.nextpage>(state.task.nextpage||1)?action.payload.nextpage:(state.task.nextpage||1) , task:load};
      },
        setusertask: (state, action) => {
      
            // action.payload.usertask.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            state.task = action.payload
        },
        setreferesh: (state, action) => {
     
        
      
            // action.payload.users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.refresh = action.payload
      },
        deleteusertask: (state, action) => {


            // let data = [...state.usertask];
            // data.splice(index, 1);
            // setusertask(data);


            // console.log(action,state.usertask)
            // let load =  state.userusertask.filter(e=>!action.payload.find(ee=>ee.userusertaskId==e.userusertaskId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.usertask.splice(action.payload.index, 1);
      },
  
    },
  });
  
  export const { setusertask ,deleteusertask,addusertask,setreferesh } = usertask_user_slice.actions;
  export const usertask_user_Reducer = usertask_user_slice.reducer;