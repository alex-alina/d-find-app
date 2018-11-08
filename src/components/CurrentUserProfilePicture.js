import * as React from 'react';
import '../styles/PictureFrame.css'

export default function CurrentUserProfilePicture(props) {

  return (<div className="picture-frame">
    <img src={props.currentUserProfile.logo} alt={props.currentUserProfile.id}></img>
  </div>)
}