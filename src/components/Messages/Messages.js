import React from "react";

import s from './Messages.module.css';
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import Dialogs from "./Dialogs/Dialogs";

const Messages = ({state}) => {
    return (
        <div className={s.messages}>
            <MessagesWrapper state={state}/>
            <Dialogs state={state}/>
        </div>
    )
};

export default Messages;
