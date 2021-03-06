import React from "react";

import s from "./MessagesWrapper.module.css";
import Message from "./Message/Message";

const MessagesWrapper = ({messages}) => {

    let messagesElements = messages.map(d => {
        return (
            <li key={d.id} className={s.messagesListItem}>
                <Message
                    username={d.username}
                    time={d.time}
                    date={d.date}
                    message={d.message}
                />
            </li>
        );
    }).reverse();

    return (
        <div className={s.container}>
            <ul className={s.messagesList}>
                {messagesElements}
            </ul>
        </div>
    )
};

export default MessagesWrapper;
