import React from "react";

import {addMessageActionCreator, updateMessageChangeActionCreator} from "../../../redux/messages-reducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = ({store}) => {

    const state = store.getState();
    const newMessageValue = state.messagesReducer.newMessageValue;

    const messageChangeHandler = text => store.dispatch(updateMessageChangeActionCreator(text));
    const addMessageHandler = () => store.dispatch(addMessageActionCreator());

    return <NewMessage
        messageChange={messageChangeHandler}
        newMessageValue={newMessageValue}
        addMessage={addMessageHandler}
    />;
};

export default NewMessageContainer;
