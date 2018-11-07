import * as React from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';
import LikeBtnContainer from './LikeBtnContainer';


class MainScreenContainer extends React.Component {

  render() {
    return <div>
      <ProfilePicture candidateProfile={this.props.shownCandidate} />
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

export default connect(mapStateToProps)(MainScreenContainer)