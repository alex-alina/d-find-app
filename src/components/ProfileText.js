import * as React from 'react';
import '../styles/ProfileText.css'

export default function ProfileText(props) {

  return (<div className="profile-text">
    <div className="description-header">
      <h1>{props.shownCandidate.name}</h1>
      <h2>{props.shownCandidate.location}</h2>
    </div>
    <h3>{props.shownCandidate.title}</h3>
    <div className="info-container">
      <p>Elevator Pitch: {props.shownCandidate.elevatorPitch}</p>
      <p>Previous Experience: {props.shownCandidate.previousExperience}</p>
      <p>Languages: {props.shownCandidate.languages}</p>
      <p>Skills: {props.shownCandidate.skills}</p>
      <p>Portfolio: {props.shownCandidate.portfolio}</p>
      <p>Education: {props.shownCandidate.education}</p>
    </div>
  </div>)
}