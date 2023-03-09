import React, {useEffect, useRef} from 'react';
import cl from "./MessageList.module.scss"
import Message from "../Message/Message";
import {useAppSelector} from "../../hooks/redux";

const MessageList = () => {
    const messageList = useAppSelector(state => state.history.history)

    const bottomRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messageList])

    return (
        <div className={cl.main}>
            {messageList.length === 0
                ?
                <h3 className={cl.nomessage}>No messages yet</h3>
                :
                messageList.map(message => <Message {...message} key={message.messageID}/>)
            }

            <div ref={bottomRef}/>
        </div>
    );
};

export default MessageList;