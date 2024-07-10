import React from "react";
import {Input, Textarea} from "../../common/form-controls/FormControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../api/api";
import styles from "../../common/form-controls/FormControls.module.css";

// type ProfileEditFormProps = InjectedFormProps<ProfileType> & {
//     profile: ProfileType
// }

type ProfileEditFormOwnProps = {
    profile: ProfileType
}

type ProfileEditFormProps = InjectedFormProps<ProfileType, ProfileEditFormOwnProps> & ProfileEditFormOwnProps;

export const ProfileEditForm = ({handleSubmit, profile, error}: ProfileEditFormProps) => {
    if (error) console.log(error)
    return (
        <form onSubmit={handleSubmit}>
            <button>save</button>
            {error && <span className={styles.formError}>{error}</span>}
            <div>
                <b>full name: </b>
                <Field placeholder={'full name'} type={'text'} component={Input} name={'fullName'}/>
            </div>
            <div>
                <b>Looking for a job: </b>
                <Field type={'checkbox'} component={Input} name={'lookingForAJob'}/>
            </div>
            <div>
                <b>My professional skills: </b>
                <Field placeholder={'my professional skills'} type={'text'} component={Textarea}
                       name={'lookingForAJobDescription'}/>
            </div>
            <div>
                {Object.keys(profile.contacts).map((key: string) => (
                    <div key={key}>
                        <b>{key}</b>
                        <Field type="text" placeholder={key} component={Input} name={`contacts.${key}`}/>
                    </div>
                ))}
            </div>
            <div>
                <b>About me: </b>
                <Field placeholder={'about me'} type={'text'} component={Textarea}
                       name={'aboutMe'}/>
            </div>
        </form>
    )
}

export const EditProfileReduxForm = reduxForm<ProfileType, ProfileEditFormOwnProps>({form: 'edit-profile'})(ProfileEditForm)
