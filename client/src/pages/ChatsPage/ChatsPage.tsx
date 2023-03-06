import React from 'react';
import cl from "./ChatsPage.module.scss"
import ChatsSidebar from "../../components/ChatsSidebar/ChatsSidebar";
import ChatFrame from "../../components/ChatFrame/ChatFrame";

const ChatsPage = () => {
    return (
        <div className={cl.main}>
            <ChatsSidebar/>
            <ChatFrame/>
        </div>
    );
};

export default ChatsPage;