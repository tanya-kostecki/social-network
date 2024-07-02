import React from 'react';
import {UserType} from "../../types";
import {Pagination} from "./Pagination";
import {User} from "./User";

type UsersProps = {
    users: UserType[]
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChange: (page: number) => void
    isFollowingProgress: number[]
};
export const Users = ({
                          users,
                          followUser,
                          unfollowUser,
                          pageSize,
                          totalUsersCount,
                          currentPage,
                          onPageChange,
                          isFollowingProgress
                      }: UsersProps) => {
    return (
        <main className='content'>
            <Pagination pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage}
                        onPageChange={onPageChange}/>
            {users.map(u => (
                <User key={u.id} user={u} followUser={followUser} unfollowUser={unfollowUser}
                      isFollowingProgress={isFollowingProgress}/>
            ))}
        </main>
    );
};