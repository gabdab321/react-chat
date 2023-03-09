import React, {useContext, useEffect} from 'react';
import cl from "./ChatFrame.module.scss"
import MessageList from "../MessageList/MessageList";
import {useAppDispatch} from "../../hooks/redux";
import {setHistory} from "../../redux/slices/historySlice";
import SocketContext from "../../context/SocketContext";
import MessageInput from "../MessageInput/MessageInput";

const ChatFrame = () => {
    const {socket} = useContext(SocketContext)
    socket.emit("join", "test")

    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on("receive_message", message => {
            dispatch(setHistory(message))
        })

        return () => {
            socket.off("receive_message")
        }
    }, [socket])

    return (
        <div className={`${cl.main}`}>
            <header>Ivan Postryhan</header>

            <MessageList />
            <MessageInput />
        </div>
    );
};

export default ChatFrame;