const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

const store = {

    _state: {

        postsData: {
            posts: [
                { id: 1, username: 'Username', date: '20.3.2020', message: 'Hi, how are you?' },
                { id: 2, username: 'Username', date: '20.3.2020', message: 'Do you learn React?' }
            ],
            newPostValue: ''
        },

        messagesData: {
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
        }

    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        if (action.type === ADD_POST) {
            const d = new Date();
            const newPost = {
                id: 3,
                username: 'Username',
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: this._state.postsData.newPostValue
            };
            this._state.postsData.posts.push(newPost);
            this._state.postsData.newPostValue = '';
            this._callSubscriber(this._state, this.dispatch);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.postsData.newPostValue = action.newText;
            this._callSubscriber(this._state, this.dispatch);

        } else if (action.type === MESSAGE_CHANGE) {
            this._state.messagesData.newMessageValue = action.newText;
            this._callSubscriber(this._state, this.dispatch);
        } else if (action.type === ADD_MESSAGE) {
            const d = new Date();
            const newMessage = {
                id: 4,
                username: 'You',
                time: `${d.getHours()}:${d.getMinutes()}`,
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: this._state.messagesData.newMessageValue
            };
            this._state.messagesData.messages.push(newMessage);
            this._state.messagesData.newMessageValue = '';
            this._callSubscriber(this._state, this.dispatch);
        }
    }

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
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

export default store;
