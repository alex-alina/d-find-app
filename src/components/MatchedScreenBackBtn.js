import * as React from 'react';
import Back from '../images/Back.svg';
import { Link } from 'react-router-dom';

export default function MatchedScreenBackBtn(props) {
  return (
    <Link to='/'><img src={Back} alt="" className="match-back-btn"></img></Link>
  )
}