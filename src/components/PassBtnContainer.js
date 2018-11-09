import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import PassBtn from './PassBtn';
import { setShownCandidate } from '../actions/setShownCandidate';
import { nextCandidateIndex } from './nextCandidateIndex';

class PassBtnContainer extends Component {
  

  handleClickedPass = () => {
    if (nextCandidateIndex(this.props.shownCandidate, this.props.candidates) === null) {
      alert("There are no more candidates!")
    } else {
      this.props.setShownCandidate(nextCandidateIndex(this.props.shownCandidate, this.props.candidates))
    }
    
  }

  render() {
    return (
      <PassBtn clickPass={this.handleClickedPass} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
    shownCandidate: state.shownCandidate,
  }
}

export default connect(mapStateToProps, { setShownCandidate } )(PassBtnContainer)
