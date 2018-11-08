import * as React from 'react';
import '../styles/ProfileText.css'

export default function ProfileText(props) {

  return (<div className="profile-text">
    <div className="description-header">
      <h1>{props.candidateProfile.name}</h1>
      <h2>{props.candidateProfile.location}</h2>
    </div>

    <div className="info-container">
      <h3>{props.candidateProfile.title}</h3>
      <p>{props.candidateProfile.elevatorPitch}</p>
      <h4>Previous Experience:</h4>
      <p>{props.candidateProfile.previousExperience}</p>
      <h4>Languages:</h4>
      <p>{props.candidateProfile.languages}</p>
      <h4>Skills:</h4>
      <p>{props.candidateProfile.skills}</p>
      <h4>Portfolio:</h4>
      <p>{props.candidateProfile.portfolio}</p>
      <h4>Education:</h4>
      <p>{props.candidateProfile.education}</p>
    </div>
  </div>)
}