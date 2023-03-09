import React, {ChangeEvent, useContext, useState} from 'react';
import cl from "./MessageInput.module.scss";
import {IMessage} from "../../models/IMessage";
import {v4 as uuidv4} from "uuid";
import {setHistory} from "../../redux/slices/historySlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import SocketContext from "../../context/SocketContext";

const MessageInput = () => {
    const dispatch = useAppDispatch()

    const {username} = useAppSelector(state => state.user)
    const {socket} = useContext(SocketContext)

    const [messageContent, setMessageContent] = useState<string>("")

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        setMessageContent(e.target.value)
    }

    function sendMessage(): void {
        const newMessage: IMessage = ({
            content: messageContent,
            date: Date.now(),
            author: username,
            messageID: uuidv4()
        })

        socket.emit("send_message", {message: newMessage, room: `test`})
        dispatch(setHistory(newMessage))

        setMessageContent("")
    }

    function sendKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
        if(e.key === "Enter") {
            sendMessage()
        } else {
            return
        }
    }

    return (
        <div className={cl.input_block}>
            <input
                value={messageContent}
                onChange={handleChange}
                onKeyDown={sendKeyPress}

                className={cl.input}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage} className={cl.send}/>
        </div>
    );
};

export default MessageInput;