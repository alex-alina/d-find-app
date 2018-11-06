import * as React from 'react';
import '../styles/ProfileText.css'

export default function ProfileText(props) {

  return (<div className="profile-text">
    <h1>Name: {props.userProfile.name}</h1>
    <h2>Location: {props.userProfile.location}</h2>
    <p>Elevator Pitch: {props.userProfile.elevatorPitch}</p>
    <p>Previous Experience: {props.userProfile.previousExperience}</p>
    <p>Languages: {props.userProfile.languages}</p>
    <p>Skills: {props.userProfile.skills}</p>
    <p>Portfolio: {props.userProfile.portfolio}</p>
    <p>Education: {props.userProfile.education}</p>
    <button>More</button>
  </div>)
}