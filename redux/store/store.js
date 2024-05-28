import { configureStore, createAction } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
// import { authReducer } from "@/store/authSlice";
import { userReducer } from "../slices/user";
import { task_admin_Reducer } from "../slices/task_admin";
import { stat_admin_Reducer } from "../slices/statistics_admin";
import { admins_Reducer } from "../slices/admins";
import { currency_Reducer } from "../slices/currency";
import { profile_Reducer } from "../slices/profile";
import { wallet_Reducer } from "../slices/wallet";
import { task_user_Reducer } from "../slices/task_user";
import { usertask_user_Reducer } from "../slices/usertask_user";
import { users_admin_Reducer } from "../slices/users_admin";
import { tranx_admin_Reducer } from "../slices/transaction_admin";
import { stat_user_Reducer } from "../slices/statistics_user";
import { menu_Reducer } from "../slices/menu_activator";
import { imageReducer } from "../slices/image";
import { centermodalReducer } from "../slices/centermodals";
import { taskinfo_users_admin_Reducer } from "../slices/taskinfo_users_admin";

export const store = configureStore({
    
  reducer: {
    taskinfo_users_admin:taskinfo_users_admin_Reducer,
    centermodal:centermodalReducer,
    image:imageReducer,
    user: userReducer,
    task_admin: task_admin_Reducer,
    stat_admin: stat_admin_Reducer,
    stat_user: stat_user_Reducer,
    admins: admins_Reducer,
    currency: currency_Reducer,
    profile: profile_Reducer,
    wallet: wallet_Reducer,
    task_user: task_user_Reducer,
    usertask_user: usertask_user_Reducer,
    users_admin: users_admin_Reducer,
        tranx_admin: tranx_admin_Reducer,
        menu:menu_Reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export const AppDispatch = useDispatch;
export const useAppSelector = useSelector;
