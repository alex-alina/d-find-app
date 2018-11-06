import * as React from 'react';
import '../styles/ProfileText.css'

export default function ProfileText(props) {

  return (<div className="profile-text">
    <div className="description-header">
      <h1>{props.userProfile.name}</h1>
      <h2>{props.userProfile.location}</h2>
    </div>
    <h3>{props.userProfile.title}</h3>
    <div className="info-container">
      <p>Elevator Pitch: {props.userProfile.elevatorPitch}</p>
      <p>Previous Experience: {props.userProfile.previousExperience}</p>
      <p>Languages: {props.userProfile.languages}</p>
      <p>Skills: {props.userProfile.skills}</p>
      <p>Portfolio: {props.userProfile.portfolio}</p>
      <p>Education: {props.userProfile.education}</p>
    </div>

    <button className="toggle-button">^</button>
  </div>)
}