const state = {

    postsData: [
        { id: 1, username: 'Username', date: '20.03.2020', message: 'Hi, how are you?' },
        { id: 2, username: 'Username', date: '20.03.2020', message: 'Do you learn React?' }
    ],

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

};

export const addPostHandler = postMessage => {
    const d = new Date();
    const newPost = {
        id: 3,
        username: 'Username',
        date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
        message: postMessage
    };
    state.postsData.push(newPost);
};

export default state;
