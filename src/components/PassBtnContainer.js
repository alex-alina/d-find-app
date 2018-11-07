import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import PassBtn from './PassBtn';
import { setShownCandidate } from '../actions/setShownCandidate'

class PassBtnContainer extends Component {
  handleClickedPass = () => {
    this.props.setShownCandidate()
  }

  render() {
    return (
      <PassBtn clickPass={this.handleClickedPass} />
    )
  }
}



export default connect(null, { setShownCandidate } )(PassBtnContainer)
