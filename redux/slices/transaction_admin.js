import { createSlice } from "@reduxjs/toolkit";
import { revertAll } from "../actions/actions";

const initialState = {

count:{},
    payout: {},
data:[],
completeddata: {
  data:[]
  },
  refresh:false
  };
  
  export const tranx_admin_slice = createSlice({
    name: "tranx_admin",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
    reducers: {
        setcount: (state, action) => {
            console.log(action.payload)
        state.count = action.payload;
      },
      setpayout: (state, action) => {
        state.payout = action.payload;
      },
      setdata: (state, action) => {
        state.data = action.payload;
      },
      adddatafront: (state, action) => {
        state.data = [...action.payload.data, ...state.data];
      },
      adddataback: (state, action) => {
        state.data = [ ...state.data,...action.payload.data,];
      },
      addcompleteddatafront: (state, action) => {
        state.completeddata.data = [...action.payload.data, ...state.completeddata.data];
      },
      addcompleteddataback: (state, action) => {
        state.completeddata.data = [ ...state.completeddata.data,...action.payload.data,];
      },
      updatedata: (state, action) => {
        state.data.splice(action.payload.index,1);
      },





      setcompleteddata: (state, action) => {
        // console.log(action,"userss")
        
      
        // action.payload.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.completeddata = {...action.payload};
  },
    setreferesh: (state, action) => {
     
        
      
        // action.payload.users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.refresh = action.payload
  },
    addcompleteddata: (state, action) => {
        // console.log(action,"userss")
        
        let load =  state.completeddata.data.filter(e=>!action.payload.data.find(ee=>ee.ref==e.ref) )
        load.push(...action.payload.data)
        // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.completeddata = {...action.payload,  nextpage:action.payload.nextpage>(state.completeddata.nextpage||1)?action.payload.nextpage:(state.completed.nextpage||1) , data:load};
  },
    deletecompleteddata: (state, action) => {


        // let data = [...state.users];
        // data.splice(index, 1);
        // setusers(data);


        // console.log(action,state.users)
        // let load =  state.users.filter(e=>!action.payload.find(ee=>ee.usersId==e.usersId) )
        // load.push(...action.payload)
        // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.completeddata.data.splice(action.payload.index, 1);
  },
updcompleteddata: (state, action) => {


        // let data = [...state.users];
        // data.splice(index, 1);
        // setusers(data);


        // console.log(action,state.users)
        // let load =  state.users.filter(e=>!action.payload.find(ee=>ee.usersId==e.usersId) )
        // load.push(...action.payload)
        // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.completeddata.data[action.payload.index]={...  state.completeddata.data[action.payload.index],...action.payload.data};
  },
    deletecompleteddata_id: (state, action) => {


        // let data = [...state.users];
        // data.splice(index, 1);
        // setusers(data);


        // console.log(action,state.users)
        // let load =  state.users.filter(e=>!action.payload.find(ee=>ee.usersId==e.usersId) )
        // load.push(...action.payload)
        // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        let index = state.users.findIndex(e=>e.ref==action.payload.ref)
        if (index && index>=0) {
            
            state.completeddata.data.splice(index, 1);
        }
  },
    updatecompleteddata: (state, action) => {


        // let data = [...state.users];
        // data.splice(index, 1);
        // setusers(data);


        // console.log(action,state.users)
        // let load =  state.users.filter(e=>!action.payload.find(ee=>ee.usersId==e.usersId) )
        // load.push(...action.payload)
        // load.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    state.completeddata.data.splice(action.payload.index, 1);
  },






    },
  });
  
  export const {addcompleteddataback,addcompleteddatafront,adddataback,adddatafront,updcompleteddata, setcount,setpayout,setdata,updatedata,setcompleteddata,addcompleteddata,deletecompleteddata,updatecompleteddata,deletecompleteddata_id ,setreferesh} = tranx_admin_slice.actions;
  export const tranx_admin_Reducer = tranx_admin_slice.reducer;