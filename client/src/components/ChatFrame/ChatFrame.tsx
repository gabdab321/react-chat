import React, {ChangeEvent, useEffect, useState} from 'react';
import cl from "./ChatFrame.module.scss"
import MessageList from "../MessageList/MessageList";
import {IMessage} from "../../models/IMessage";
import {useAppSelector} from "../../hooks/redux";
import {v4 as uuidv4} from "uuid";

const ChatFrame = () => {
    const {username} = useAppSelector(state => state.user)
    const {socket} = useAppSelector(state => state.socket)

    socket.emit("join", "test")

    const [messageList, setMessageList] = useState<IMessage[]>([])
    const [message, setMessage] = useState<IMessage>({content: "", date: 0, author: username, messageID: uuidv4()})

    function sendMessage(): void {
        setMessage({...message, date: Date.now()})

        socket.emit("send_message", {message: message, room: `test`})
        setMessageList([...messageList, message])

        setMessage({...message, content: "", messageID: uuidv4()})
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
        if(e.key === "Enter") {
            sendMessage()
        } else {
            return
        }
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        setMessage({...message, content: e.target.value})
    }

    useEffect(() => {
        socket.on("receive_message", message => {
            setMessageList([...messageList, message])
        })
    }, [socket])

    return (
        <div className={`${cl.main}`}>
            <header>Ivan Postryhan</header>

            <MessageList messageList={messageList}/>

            <div className={cl.input_block}>
                <input
                    value={message.content}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}

                    className={cl.input}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage} className={cl.send}/>
            </div>
        </div>
    );
};

export default ChatFrame;