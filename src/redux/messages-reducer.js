const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

const initialState = {
    newMessageValue: '',
    messages: [
        { id: 1, username: 'Petya', time: '18:22', date: '20.3.2020', message: 'Hi. How are you?' },
        { id: 2, username: 'You', time: '18:24', date: '20.3.2020', message: 'Hi. I\'m fine' },
        { id: 3, username: 'Petya', time: '18:25', date: '20.3.2020', message: 'Kk' }
    ],
    dialogs: [
        { id: 1, name: 'Vasya', new: 0 },
        { id: 2, name: 'Petya', new: 3 },
        { id: 3, name: 'Andrei', new: 0 }
    ]
};

const messagesReducer = (state = initialState, action) => {

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
