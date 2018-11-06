import * as React from 'react';
import '../styles/PictureFrame.css'

export default function ProfilePicture(props) {

  return (<div className="picture-frame">
    <img src={props.userProfile.avatar} alt="" height="401" width="375"></img>
  </div>)
}