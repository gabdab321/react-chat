import React from 'react';
import cl from "./ChatsSidebar.module.scss"
import ChatItem from "../ChatItem/ChatItem";
import moment from "moment";

const ChatsSidebar = () => {
    return (
        <div className={cl.main}>
            <div className={cl.search__block}>
                <h2 className={cl.search__title}>Your Chats</h2>
                <label>
                    <input className={cl.input} placeholder="Search..."/>
                </label>
            </div>

            <ChatItem name={"Ivan Postryhan"} lastMessage={"Asdsaff"} date={moment()}/>
            <ChatItem name={"Karina"} lastMessage={"asg;sdfgsdfl"} date={moment()}/>
            <ChatItem name={"Dima"} lastMessage={"Sdasfgalksdg"} date={moment()}/>
        </div>
    );
};

export default ChatsSidebar;