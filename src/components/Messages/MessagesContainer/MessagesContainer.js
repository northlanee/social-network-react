import React from "react";

import s from "./MessagesContainer.module.css";
import Message from "./Message/Message";

const MessagesContainer = () => {
    return (
        <div className={s.container}>
            <ul className={s.messagesList}>
                <li className={s.messagesListItem}>
                    <Message username="Petya" time="18:22" date="March, 20" message="Hi. How are you?" />
                </li>
                <li className={s.messagesListItem}>
                    <Message username="You" time="18:24" date="March, 20" message="Hi. I'm fine" />
                </li>
                <li className={s.messagesListItem}>
                    <Message username="Petya" time="18:25" date="March, 20" message="Kk" />
                </li>
            </ul>
        </div>
    )
};

export default MessagesContainer;
