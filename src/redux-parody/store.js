import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";

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
        postsReducer(this._state.postsData, action);
        messagesReducer(this._state.messagesData, action);
        this._callSubscriber(this._state, this.dispatch);
    }

};

export default store;
