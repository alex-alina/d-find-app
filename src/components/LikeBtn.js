import * as React from 'react'
import LikeButton from '../images/LikeButton.svg'

export default function LikeBtn(props) {
  return (
   <img src={LikeButton} className="like-button" alt="like" onClick={props.clickLike}></img>
  )
}