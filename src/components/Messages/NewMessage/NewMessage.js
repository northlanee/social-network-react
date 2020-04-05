import React from "react";

import NewMessageForm from "./NewMessageForm";

const NewMessage = ({addMessage}) => {

    const handleMessage = (data) => addMessage(data.message);

    return (
        <NewMessageForm onSubmit={handleMessage}/>
    );
};

export default NewMessage;
