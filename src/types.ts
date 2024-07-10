import {ProfileType} from "./api/api";

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
// export type FriendType = {
//     id: number
//     name: string
//     avatar: string
// }



export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType
    status: string
    editMode: boolean
    isProfileFetching: boolean
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string,
    photos: {
        small: string | null
        large: string | null
    }
    location?: {
        city: string
        country: string
    }
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: number[]
}

