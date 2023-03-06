import React from 'react';
import cl from "./Message.module.scss"
import {IMessage} from "../../models/IMessage";
import {useAppSelector} from "../../hooks/redux";
import moment from "moment";

const Message = ({content, date, author}: IMessage) => {
    const {username} = useAppSelector(state => state.user)

    const classes = `${cl.main} ${username === author ? cl.local : cl.default}`
    const formatted = moment(date).format("HH:mm")

    return (
        <div className={classes}>
            <p className={cl.content}>{content}</p>
            <p className={cl.date}>{formatted}</p>
        </div>
    );
};

export default Message;