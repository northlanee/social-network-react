import React from "react";

import s from './Messages.module.css';
import MessagesContainer from "./MessagesContainer/MessagesContainer";
import Dialogs from "./Dialogs/Dialogs";

const Messages = () => {
    return (
        <div className={s.messages}>
            <MessagesContainer/>
            <Dialogs/>
        </div>
    )
};

export default Messages;
