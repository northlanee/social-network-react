import React from "react";

import s from './Messages.module.css';
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import Dialogs from "./Dialogs/Dialogs";
import NewMessageContainer from "./NewMessage/NewMessageContainer";

const Messages = ({store}) => {
    return (
        <div className={s.messages}>
            <div className={s.messagesContainer}>
                <NewMessageContainer store={store} />
                <MessagesWrapper store={store} />
            </div>

            <Dialogs store={store}/>
        </div>
    )
};

export default Messages;
