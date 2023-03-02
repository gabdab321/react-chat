import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

const initialState: IUser = JSON.parse(localStorage.getItem("user") || JSON.stringify({
    publicName: "", username: "", password: ""
}))

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser(state: IUser, action: PayloadAction<IUser>) {
            state = {...action.payload}
            localStorage.setItem("user", JSON.stringify(action.payload))
        }
    },
})

export const userReducer = userSlice.reducer
export const {setUser} = userSlice.actions