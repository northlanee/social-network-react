const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

const initialState = {
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
        case ADD_MESSAGE:
            const d = new Date();
            const newMessage = {
                id: 4,
                username: 'You',
                time: `${d.getHours()}:${d.getMinutes()}`,
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: action.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }

};

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
};

export default messagesReducer;
