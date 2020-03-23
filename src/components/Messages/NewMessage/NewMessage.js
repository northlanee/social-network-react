import React from "react";

import s from "./NewMessage.module.css";
import {addMessageActionCreator, updateMessageChangeActionCreator} from "../../../redux/messages-reducer";

const NewMessage = ({state, dispatch}) => {

    const messageChange = e => dispatch(updateMessageChangeActionCreator(e.target.value));
    const addMessage = () => dispatch(addMessageActionCreator());

    return (
        <div className={s.newMessage}>
            <textarea onChange={messageChange} value={state.newMessageValue} className={s.postField} cols="60" rows="3" />
            <button onClick={addMessage} type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewMessage;
