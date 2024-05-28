import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'aebda00a-39a0-4814-bd9e-ddde6720d694'
    }
})

export const unfollowUser = async (userId: number) => {
    return instance.delete(`follow/${userId}`).then(res => res.data)
}

export const followUser = async (userId: number) => {
    return instance.post(`follow/${userId}`).then(res => res.data)
}

export const getUsers = async (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
}

export const getUserProfile = async (userId: string) => {
    return instance.get(`profile/${userId}`).then(res => res.data)
}

export const getAuthMe = async () => {
    return instance.get('auth/me').then(res => res.data)
}