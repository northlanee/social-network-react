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
            messages: [
                { id: 1, username: 'Petya', time: '18:22', date: 'March, 20', message: 'Hi. How are you?' },
                { id: 2, username: 'You', time: '18:24', date: 'March, 20', message: 'Hi. I\'m fine' },
                { id: 3, username: 'Petya', time: '18:25', date: 'March, 20', message: 'Kk' }
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

        if (action.type === 'ADD-POST') {
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

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.postsData.newPostValue = action.newText;
            this._callSubscriber(this._state, this.dispatch);

        }
    }

};

export default store;
