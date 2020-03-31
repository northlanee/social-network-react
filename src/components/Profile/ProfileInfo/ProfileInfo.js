import React from "react";
import Poster from './../../../images/poster.jpg';

import s from './ProfileInfo.module.css';
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile}) => {

    let jobDescription;
    if (profile.lookingForAJob) {
        jobDescription = <div className={s.infoPiece}>
            <span className={s.infoTitle}>Job description: </span>
            <span className={s.infoContent}>{profile.lookingForAJobDescription}</span>
        </div>;
    }


    return (
        <div className={s.user}>
            <div className={s.poster}>
                <img src={profile.photos.large || Poster} alt="poster"/>
            </div>
            <div className="info">
                <ProfileStatus />
                <div className={s.infoPiece}>
                    <span className={s.infoTitle}>Username: </span>
                    <span className={s.infoContent}>{profile.fullName}</span>
                </div>
                <div className={s.infoPiece}>
                    <span className={s.infoTitle}>About me: </span>
                    <span className={s.infoContent}>{profile.aboutMe}</span>
                </div>
                <div className={s.infoPiece}>
                    <span className={s.infoTitle}>LF a job: </span>
                    <span className={s.infoContent}>{profile.lookingForAJob ? 'Yes' : 'No'}</span>
                </div>
                {jobDescription || null}
            </div>
        </div>
    );
};

export default ProfileInfo;
