import * as React from 'react';
import Back from '../images/Back.svg';

export default function MatchedScreenBackBtn(props) {
  return (
    <img src={Back} alt="" className="match-back-btn" onClick={props.clickHandler}></img>
  )
}