import * as React from 'react';
import '../styles/PictureFrame.css'

export default function ProfilePicture(props) {

  return (<div className="picture-frame">
    <img src={props.shownCandidate.avatar} alt={props.shownCandidate.id}></img>
  </div>)
}