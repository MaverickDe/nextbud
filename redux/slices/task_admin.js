import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {
  task: {
    task: [],
  },
  refresh: false,
};

export const task_admin_slice = createSlice({
  name: "task_admin",
  initialState,
  reducers: {
    setreferesh: (state, action) => {
      // action.payload.users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      state.refresh = action.payload;
    },
    updatetask: (state, action) => {
      let index = state.task.task.findIndex(
        (e) => e.taskId == action.payload.taskId
      );
      if (index >= 0) {
        state.task.task[index] = {
          ...state.task.task[index],
          ...action.payload,
        };
      }
      
    },

    addtask: (state, action) => {
      let load = state.task.task.filter(
        (e) => !action.payload.task.find((ee) => ee.taskId == e.taskId)
      );
      load.push(...action.payload.task);
      // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      state.task = {
        ...action.payload,
        nextpage:
          action.payload.nextpage > (state.task.nextpage || 1)
            ? action.payload.nextpage
            : state.task.nextpage || 1,
        task: load,
      };
      // state.task = load;
    },
    settask: (state, action) => {
      // action.payload.task.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      state.task = action.payload;
    },
    deletetask: (state, action) => {
      state.task.task.splice(action.payload.index, 1);
    },
    deletetask_id: (state, action) => {
      let index = state.task.task.findIndex(
        (e) => e.taskId == action.payload.taskId
      );
      if (index >= 0) {
        state.task.task.splice(index, 1);
      }
    },
  },
});

export const { settask, deletetask_id, deletetask, addtask, updatetask } =
  task_admin_slice.actions;
export const task_admin_Reducer = task_admin_slice.reducer;
