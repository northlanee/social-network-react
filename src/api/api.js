import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a6426442-a76a-4274-89e9-fbfb192a808b'
    }
});

export const api = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data;
            });
    },

    followAPI(id) {
        return instance.post("follow/" + id, {}).then(response => {
            return response.data;
        });
    },

    unfollowAPI(id) {
        return instance.delete("follow/" + id).then(response => {
            return response.data;
        });
    },

    getProfile(id) {
        return instance.get("profile/" + id)
            .then(response => response.data);
    },

    getAuthMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data;
            });
    }

};
