import {api} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_FETCHING = 'SET_FETCHING';

const initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                usersList: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }

};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});

export const getUsers = (pageSize, currentPage) => {
    return ((dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setFetching(true));
        api.getUsers(pageSize, currentPage).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setFetching(false));
        });
    })
};

export const acceptFollow = (id) => {
    return ((dispatch) => {
        api.followAPI(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id));
            }
        });
    })
};

export const acceptUnfollow = (id) => {
    return ((dispatch) => {
        api.unfollowAPI(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id));
            }
        });
    })
};

export default usersReducer;
