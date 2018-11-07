import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import LikeBtn from './LikeBtn';
import { addLikedCandidate } from '../actions/addLikedCandidate';
import { setShownCandidate } from '../actions/setShownCandidate';
import { addMatch } from '../actions/addMatch';

class LikeBtnContainer extends Component {
  handleClickedLike = () => {
    this.props.addLikedCandidate(this.props.shownCandidate.id)
    this.props.setShownCandidate()
    this.props.addMatch(this.props.shownCandidate, this.props.currentUserID)
  }

  render() {
    return (
      <LikeBtn clickLike={this.handleClickedLike} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shownCandidate: state.shownCandidate,
    currentUserID: state.currentUser.id
  }
}

export default connect(mapStateToProps, { addLikedCandidate, setShownCandidate, addMatch} )(LikeBtnContainer)
