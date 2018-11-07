import * as React from 'react'

export default function LikeBtn(props) {
  return (
    <div>
      <button onClick={props.clickLike}>Like</button>
    </div>
  )
}