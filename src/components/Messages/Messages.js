import React from "react";

import s from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import NewMessage from "./NewMessage/NewMessage";

const Messages = ({messages, dialogs, newMessageValue, messageChange, addMessage}) => {
    return (
        <div className={s.messages}>
            <div className={s.messagesContainer}>
                <NewMessage newMessageValue={newMessageValue} messageChange={messageChange} addMessage={addMessage} />
                <MessagesWrapper messages={messages} />
            </div>

            <Dialogs dialogs={dialogs} />
        </div>
    )
};

export default Messages;
