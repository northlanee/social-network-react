import React from "react";

import s from "./NewMessage.module.css";

const NewMessage = ({newMessageValue, messageChange, addMessage}) => {

    const messageOnChange = e => messageChange(e.target.value);
    const addMessageOnClick = () => addMessage();

    return (
        <div className={s.newMessage}>
            <textarea onChange={messageOnChange} value={newMessageValue} className={s.postField} cols="60" rows="3" />
            <button onClick={addMessageOnClick} type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewMessage;
