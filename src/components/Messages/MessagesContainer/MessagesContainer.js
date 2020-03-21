import React from "react";

import s from "./MessagesContainer.module.css";
import Message from "./Message/Message";

const MessagesContainer = () => {
    const messagesData = [
        {
            id: 1,
            username: 'Petya',
            time: '18:22',
            date: 'March, 20',
            message: 'Hi. How are you?'
        },
        {
            id: 2,
            username: 'You',
            time: '18:24',
            date: 'March, 20',
            message: 'Hi. I\'m fine'
        },
        {
            id: 3,
            username: 'Petya',
            time: '18:25',
            date: 'March, 20',
            message: 'Kk'
        }
    ];

    let messagesElements = messagesData.map(d => {
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
    });

    return (
        <div className={s.container}>
            <ul className={s.messagesList}>
                {messagesElements}
            </ul>
        </div>
    )
};

export default MessagesContainer;
