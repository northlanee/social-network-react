const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    usersList: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) return {...user, followed: true};
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) return {...user, followed: false};
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                usersList: [...state.usersList, ...action.users]
            };
        default:
            return state;
    }

};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
