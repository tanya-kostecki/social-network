import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': process.env["REACT_APP_API_KEY"]!,
    }
})

export const usersApi = {
    unfollowUser: async (userId: number) => {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    },
    followUser: async (userId: number) => {
        return instance.post(`follow/${userId}`).then(res => res.data)
    },
    getUsers: async (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
}

export const authApi = {
    setAuthMe: async () => {
        return instance.get('auth/me').then(res => res.data)
    },
    login: async (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<ResponseType<LoginDataType>, AxiosResponse<ResponseType<LoginDataType>>>('auth/login', {
            email,
            password,
            rememberMe
        })
    },
    logout: async () => {
        return instance.delete('auth/login')
    }
}

export const profileApi = {
    getUserProfile: async (userId: string) => {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus: async (userId: string) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: async (status: string) => {
        return instance.put(`profile/status`, {status: status})
    },

}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}