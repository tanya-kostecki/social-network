import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ProfileType} from "../../../api/api";
import {EditProfileReduxForm} from "./ProfileEditForm";
import {setEditMode} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

type ProfileInfoProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    updateProfile: (profile: ProfileType) => void
    editMode: boolean
    // updateProfile: (profile: ProfileType) => Promise<any>
}

export const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, savePhoto, updateProfile, editMode}: ProfileInfoProps) => {
    // const [editMode, setEditMode] = useState<boolean>(false)
    const onImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const dispatch = useDispatch()
    const onChangeEditMode = () => {
        dispatch(setEditMode(true))
    }

    // const onFormSubmit = (formData: ProfileType) => {
    //     updateProfile(formData).then(() => {
    //         setEditMode(false)
    //     }).catch(err => console.log(err))
    // }

    const onFormSubmit = (formData: ProfileType) => {
        updateProfile(formData)
    }

    return (
        !profile ? <Preloader/> :
            < >
                <div className={classes.descriptionBlock}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <img
                            src={profile.photos.small || userPhoto}
                            alt={'avatar'}
                            className={classes.avatar}
                        />
                        {isOwner && <input type={'file'} onChange={onImageUpload}/>}
                    </div>
                    {editMode ? <EditProfileReduxForm onSubmit={onFormSubmit} initialValues={profile} profile={profile}/> :
                        <ProfileData profile={profile} isOwner={isOwner} activateEditMode={onChangeEditMode}/>}
                    <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
                </div>
            </>
    );
};

type ContactDetailType = {
    contactTitle: string
    contactValue: string
}
const ContactDetail = ({contactTitle, contactValue}: ContactDetailType) => {
    return <span className={classes.descriptionSpan}><b>{contactTitle}: </b>{contactValue}</span>
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}
const ProfileData = ({profile, activateEditMode, isOwner}: ProfileDataType) => {
    return (
        <div>
            <button onClick={activateEditMode}>edit profile</button>
            <span className={classes.descriptionSpan}><b>full name: </b> {profile.fullName}</span>
            <span className={classes.descriptionSpan}><b>looking for a job: </b>{profile.lookingForAJob ? "yes" : 'no'}</span>
            {profile.lookingForAJob && <span><b>job description: </b>{profile.lookingForAJobDescription}</span>}
            <div>
                {Object.keys(profile.contacts).map((key: string) => <ContactDetail key={key} contactTitle={key}
                                                                                   contactValue={profile.contacts[key as keyof typeof profile.contacts]}/>)}
            </div>
            <p><b>About me: </b>{profile.aboutMe}</p>
        </div>
    )
}