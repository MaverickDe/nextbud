import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
    task: {
        task:[]
    },
    refresh:false

  };
  
  export const task_user_slice = createSlice({
    name: "task_user",
      initialState,
      extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        addtask: (state, action) => {
            
            let load =  state.task.task.filter(e=>!action.payload.task.find(ee=>ee.taskId==e.taskId) )
            load.push(...action.payload.task)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            state.task = {...action.payload,  nextpage:action.payload.nextpage>(state.task.nextpage||1)?action.payload.nextpage:(state.task.nextpage||1) , task:load};
      },
      settask: (state, action) => {
          
        
          
        // action.payload.task.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.task = action.payload;
  },
        delettask: (state, action) => {


            // let data = [...state.task];
            // data.splice(index, 1);
            // settask(data);


            // console.log(action,state.task)
            // let load =  state.task.filter(e=>!action.payload.find(ee=>ee.taskId==e.taskId) )
            // load.push(...action.payload)
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.task.task.splice(action.payload.index, 1);
        },
        deletetask_id: (state, action) => {


            // let data = [...state.task];
            // data.splice(index, 1);
            // settask(data);


            // console.log(action,state.task)
            // let load =  state.task.filter(e=>!action.payload.find(ee=>ee.taskId==e.taskId) )
            // load.push(...action.payload)
            let index = state.task.task.findIndex(e=>e.taskId==action.payload.taskId)
         
            if (index >= 0) {
                
                state.task.task.splice(index, 1);
            }
            // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        },
        setreferesh: (state, action) => {
     
        
      
            // action.payload.users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        state.refresh = !state.refresh
      },
  
    },
  });
  
  export const { settask ,deletetask ,addtask ,setreferesh,    deletetask_id} = task_user_slice.actions;
  export const task_user_Reducer = task_user_slice.reducer;