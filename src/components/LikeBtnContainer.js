import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import LikeBtn from './LikeBtn';
import { addLikedCandidate } from '../actions/addLikedCandidate';
import { setShownCandidate } from '../actions/setShownCandidate';
import { addMatch } from '../actions/addMatch';
import { Redirect } from 'react-router-dom'

class LikeBtnContainer extends Component {
  state = { redirectMatch: null }

  handleClickedLike = () => {
    this.props.addLikedCandidate(this.props.shownCandidate.id)
    if (this.props.shownCandidate.likedCompanies.includes(this.props.currentUserID)) {
      this.props.addMatch(this.props.shownCandidate.id)
      this.setState({
        redirectMatch: this.props.shownCandidate.id
      })
    } else {
      this.props.setShownCandidate()
    }
  }

  render() {
    return (
      <span>
        <LikeBtn clickLike={this.handleClickedLike} />
        {
          this.state.redirectMatch &&
          <Redirect to={`/match/${this.state.redirectMatch}`} />
        }
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shownCandidate: state.shownCandidate,
    currentUserID: state.currentUser.id
  }
}

export default connect(mapStateToProps, { addLikedCandidate, setShownCandidate, addMatch })(LikeBtnContainer)
