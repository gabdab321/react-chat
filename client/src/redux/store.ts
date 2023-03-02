import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";
import {loggedReducer} from "./slices/loggedSlice";

export const store = configureStore({
    reducer: {
        "logged": loggedReducer,
        "user": userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
