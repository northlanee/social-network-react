import React from "react";
import s from "./Message.module.css";
import Userpic from "../../../../images/userpic.png";

const Message = ({username, time, date, message}) => {
    return (
        <div className={s.message}>
            <img src={Userpic} alt="Userpic" className={s.userpic}/>
            <div className={s.container}>
                <div className={s.title}>
                    <span className={s.author}>{username}</span>
                    <span className={s.time}>{date} - {time}</span>
                </div>
                <div className={s.content}>{message}</div>
            </div>
        </div>
    );
};

export default Message;
