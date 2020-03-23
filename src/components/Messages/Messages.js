import React from "react";

import s from './Messages.module.css';
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import Dialogs from "./Dialogs/Dialogs";
import NewMessage from "./NewMessage/NewMessage";

const Messages = ({state, dispatch}) => {
    return (
        <div className={s.messages}>
            <div className={s.messagesContainer}>
                <NewMessage state={state} dispatch={dispatch} />
                <MessagesWrapper state={state}/>
            </div>

            <Dialogs state={state}/>
        </div>
    )
};

export default Messages;
