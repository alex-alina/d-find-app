import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import LikeBtn from './LikeBtn';
import { addLikedCandidate } from '../actions/addLikedCandidate'

class LikeBtnContainer extends Component {
  handleClickedLike = () => {
    this.props.addLikedCandidate(this.props.shownCandidate.id)
  }

  render() {
    return (
      <LikeBtn clickLike={this.handleClickedLike} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shownCandidate: state.shownCandidate
  }
}

export default connect(mapStateToProps, { addLikedCandidate })(LikeBtnContainer)
