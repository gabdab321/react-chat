import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";
import {loggedReducer} from "./slices/loggedSlice";
import {historyReducer} from "./slices/historySlice";

export const store = configureStore({
    reducer: {
        "logged": loggedReducer,
        "user": userReducer,
        "history": historyReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
