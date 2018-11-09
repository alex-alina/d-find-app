import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import MatchedScreenBackBtn from './MatchedScreenBackBtn';
import { Link } from 'react-router-dom';
import { setShownCandidate } from '../actions/setShownCandidate';
import { nextCandidateIndex } from './nextCandidateIndex';

class MatchedScreenBackBtnContainer extends Component {
  clickHandler = () => {
    if (nextCandidateIndex(this.props.shownCandidate, this.props.candidates) === null) {
      alert("There are no more candidates!")
    } else {
      this.props.setShownCandidate(nextCandidateIndex(this.props.shownCandidate, this.props.candidates))
    }
  }

  render() {
    return (
      <Link to='/'>
        <MatchedScreenBackBtn clickHandler={this.clickHandler} />
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
    shownCandidate: state.shownCandidate,
  }
}

export default connect(mapStateToProps, { setShownCandidate })(MatchedScreenBackBtnContainer)