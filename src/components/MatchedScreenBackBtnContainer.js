import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import MatchedScreenBackBtn from './MatchedScreenBackBtn';
import { Link } from 'react-router-dom';
import { setShownCandidate } from '../actions/setShownCandidate'

class MatchedScreenBackBtnContainer extends Component {
  clickHandler = () => {
    this.props.setShownCandidate()
  }

  render() {
    return(
      <Link to='/'>
        <MatchedScreenBackBtn clickHandler={this.clickHandler} />
      </Link>
    )
  }
}

export default connect(null, { setShownCandidate })(MatchedScreenBackBtnContainer)