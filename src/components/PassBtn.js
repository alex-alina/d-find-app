import * as React from 'react';
import PassButton from '../images/PassButton.svg'

export default function PassBtn(props) {
  return (
    <img src={PassButton} alt="pass" className="passbutton" onClick={props.clickPass}></img>
  )
}