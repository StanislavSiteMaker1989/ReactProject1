import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}
                     isOwner={props.isOwner} saveProfile={props.saveProfile}/>
        <MyPostsContainer />
    </div>
};

export default Profile;