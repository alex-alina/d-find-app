import * as React from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';
import LikeBtnContainer from './LikeBtnContainer';
import { setShownCandidate } from '../actions/setShownCandidate'
import PassBtnContainer from './PassBtnContainer';

class MainScreenContainer extends React.Component {

  render() {
    return <div>
      <ProfilePicture candidateProfile={this.props.shownCandidate} />
      <LikeBtnContainer />
      <PassBtnContainer />
      <ProfileText candidateProfile={this.props.shownCandidate} />
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