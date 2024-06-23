import { configureStore, createAction } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
// import { authReducer } from "@/store/authSlice";
import { userReducer } from "../slices/user";

import { wallet_Reducer } from "../slices/wallet";

import { menu_Reducer } from "../slices/menu_activator";

import { centermodalReducer } from "../slices/centermodals";

import { authUserReducer } from "../slices/auth";

export const store = configureStore({
    
  reducer: {
    authUser:authUserReducer,
  
    centermodal:centermodalReducer,
  
    user: userReducer,
   
    wallet: wallet_Reducer,
 
        menu:menu_Reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export const AppDispatch = useDispatch;
export const useAppSelector = useSelector;
