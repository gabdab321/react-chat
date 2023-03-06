import React from 'react';
import {Moment} from "moment";
import cl from "./Chatitem.module.scss"

interface ChatItemProps {
    name: string
    lastMessage: string
    date: Moment
}

const ChatItem = ({name, lastMessage, date}: ChatItemProps) => {
    return (
        <div className={cl.main}>
            <p className={cl.name}>{name}</p>
            <p className={cl.message}>{lastMessage}</p>
            <p className={cl.date}>{date.format("HH:mm")}</p>
        </div>
    );
};

export default ChatItem;