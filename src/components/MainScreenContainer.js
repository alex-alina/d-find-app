import * as React from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';
import LikeBtnContainer from './LikeBtnContainer';
import { setShownCandidate } from '../actions/setShownCandidate'

class MainScreenContainer extends React.Component {

  passHandler = () => {
    this.props.setShownCandidate();
  }

  render() {
    return <div>
      <ProfilePicture candidateProfile={this.props.shownCandidate} />
      <button onClick={this.passHandler}>Pass</button>
      <ProfileText candidateProfile={this.props.shownCandidate} />
      <LikeBtnContainer/>
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
    shownCandidate: state.shownCandidate,
  }
}

export default connect(mapStateToProps, { setShownCandidate })(MainScreenContainer)