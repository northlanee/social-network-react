import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    'API-KEY': 'a6426442-a76a-4274-89e9-fbfb192a808b'
});

export const getUsers = (pageSize, currentPage) => {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => {
            return response.data;
        });
};

export const getProfile = (id) => {
    return instance.get("https://social-network.samuraijs.com/api/1.0/profile/" + id)
        .then(response => response.data);
};

export const getAuthMe = () => {
    return instance.get('auth/me')
        .then(response => {
            return response.data;
        });
};

export const followAPI = (id) => {
    return instance.post("follow/" + id, {}).then(response => {
        return response.data;
    });
};
