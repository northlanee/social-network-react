import React from "react";

import s from './Messages.module.css';
import MessagesContainer from "./MessagesContainer/MessagesContainer";
import Dialogs from "./Dialogs/Dialogs";

const Messages = ({data}) => {
    return (
        <div className={s.messages}>
            <MessagesContainer messages={data.messages}/>
            <Dialogs dialogs={data.dialogs}/>
        </div>
    )
};

export default Messages;
