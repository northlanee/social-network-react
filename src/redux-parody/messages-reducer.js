const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

const messagesReducer = (state, action) => {

    switch (action.type) {
        case MESSAGE_CHANGE:
            state.newMessageValue = action.newText;
            break;
        case ADD_MESSAGE:
            const d = new Date();
            const newMessage = {
                id: 4,
                username: 'You',
                time: `${d.getHours()}:${d.getMinutes()}`,
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: state.newMessageValue
            };
            state.messages.push(newMessage);
            state.newMessageValue = '';
            break;
    }

    return state;
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export const updateMessageChangeActionCreator = (text) => {
    return {
        type: MESSAGE_CHANGE,
        newText: text
    }
};

export default messagesReducer;
