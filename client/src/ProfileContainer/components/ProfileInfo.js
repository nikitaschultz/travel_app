import React from 'react';

const ProfileInfo = ({profile}) => {

  return (
    <div className="profileInfo">
        <h3 className="profileTitle"> My Profile</h3>
        <div className="profileSections">
            <div className="profileSection">
                <h3 className="sectionLabel">Name</h3>
                <h3> {profile.name} </h3>
            </div>
            <div className="profileSection">
                <h3 className="sectionLabel">Image</h3>
                <img className="profileImage" src={`../../../images/${profile.image}.jpg`} name="image1" alt=""/>
            </div>
        </div>
        <div className="editButton">
            <h3 className="editProfile">Edit Details</h3>
        </div>
    </div>
  )
}

export default ProfileInfo;
