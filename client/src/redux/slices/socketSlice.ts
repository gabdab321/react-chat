import {createSlice} from "@reduxjs/toolkit";
import io, {Socket} from "socket.io-client";

interface SocketState {
    socket: Socket
}

const initialState: SocketState = {
    socket: io("http://localhost:3001")
}

export const socketSlice = createSlice({
    name: "socketSlice",
    initialState,
    reducers: {
    }
})

export const socketReducer = socketSlice.reducer