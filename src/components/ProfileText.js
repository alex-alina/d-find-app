import * as React from 'react';
import '../styles/ProfileText.css'

export default function ProfileText(props) {

  return (<div className="profile-text">
    <div className="description-header">
      <h1>{props.candidateProfile.name}</h1>
      <h2>{props.candidateProfile.location}</h2>
    </div>
    <h3>{props.candidateProfile.title}</h3>
    <div className="info-container">
      <p>Elevator Pitch: {props.candidateProfile.elevatorPitch}</p>
      <p>Previous Experience: {props.candidateProfile.previousExperience}</p>
      <p>Languages: {props.candidateProfile.languages}</p>
      <p>Skills: {props.candidateProfile.skills}</p>
      <p>Portfolio: {props.candidateProfile.portfolio}</p>
      <p>Education: {props.candidateProfile.education}</p>
    </div>
  </div>)
}