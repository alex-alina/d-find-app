import * as React from 'react'

export default function ProfilePicture(props) {

  return (<div className="picture-frame">
    <img src={props.userProfile.avatar} alt="" height="500" width="500"></img>
  </div>)
}