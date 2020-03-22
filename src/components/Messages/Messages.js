import React from "react";

import s from './Messages.module.css';
import MessagesContainer from "./MessagesContainer/MessagesContainer";
import Dialogs from "./Dialogs/Dialogs";

const Messages = ({store}) => {
    return (
        <div className={s.messages}>
            <MessagesContainer store={store}/>
            <Dialogs store={store}/>
        </div>
    )
};

export default Messages;
