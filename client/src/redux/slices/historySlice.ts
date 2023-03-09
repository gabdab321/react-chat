import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMessage} from "../../models/IMessage";

const localHistory = localStorage.getItem("history")

interface HistoryState {
    history: IMessage[]
}

const initialState: HistoryState = {
    history: localHistory ? JSON.parse(localHistory) : []
}

const historySlice = createSlice({
    name: "historySlice",
    initialState,
    reducers: {
        setHistory(state: HistoryState, action: PayloadAction<IMessage>) {
            state.history.push(action.payload)
            localStorage.setItem("history", JSON.stringify(state.history))
        }
    }
})

export const historyReducer = historySlice.reducer
export const {setHistory} = historySlice.actions