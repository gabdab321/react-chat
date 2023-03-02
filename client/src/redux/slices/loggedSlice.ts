import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const storageData = localStorage.getItem("logged")

interface loggedState {
    logged: boolean
}

const initialState: loggedState = {
    logged: storageData ? JSON.parse(storageData) : false
}

export const loggedSlice = createSlice({
    name: "loggedSlice",
    initialState,
    reducers: {
        setLogged(state: loggedState, action: PayloadAction<boolean>) {
            state.logged = action.payload
            localStorage.setItem("logged", JSON.stringify(action.payload))
        }
    }
})

export const loggedReducer = loggedSlice.reducer
export const {setLogged} = loggedSlice.actions