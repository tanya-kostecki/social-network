import axios from "axios";
import {UserType} from "../types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': process.env["REACT_APP_API_KEY"]!,
    }
})

export const usersApi = {
    unfollowUser: async (userId: number) => {
        return instance.delete<BaseResponse>(`follow/${userId}`).then(res => res.data)
    },
    followUser: async (userId: number) => {
        return instance.post<BaseResponse<{userId: number}>>(`follow/${userId}`).then(res => res.data)
    },
    getUsers: async (currentPage: number, pageSize: number) => {
        return instance.get<UserFromServerType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
}

export const authApi = {
    setAuthMe: async () => {
        return instance.get<BaseResponse<AuthType>>('auth/me').then(res => res.data)
    },
    login: async (email: string, password: string,rememberMe: boolean = false) => {
        return instance.post<BaseResponse<LoginDataType>>('auth/login', {
            email,
            password,
            rememberMe
        })
    },
    logout: async () => {
        return instance.delete<BaseResponse>('auth/login')
    }
}

export const profileApi = {
    getUserProfile: async (userId: string) => {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus: async (userId: string) => {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus: async (status: string) => {
        return instance.put<BaseResponse<{ status: string }>>(`profile/status`, {status: status})
    },

    savePhoto: async (photoFile: File) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<BaseResponse< {photos: {large: string, small: string}}>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export type BaseResponse<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

export type AuthType = {
    id: number
    email: string
    login: string
    // isAuth: boolean
}

export type UserFromServerType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}