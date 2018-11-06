import * as React from 'react';

export default function ProfileTextNoMore(props) {

  return (<div className="profile-text">
    <h1>Name: {props.userProfile.name}</h1>
    <h2>Location: {props.userProfile.location}</h2>
    <p>Elevator Pitch: {props.userProfile.elevatorPitch}</p>
    <p>Previous Experience: {props.userProfile.previousExperience}</p>
    <p>Languages: {props.userProfile.languages}</p>
  </div>)
}