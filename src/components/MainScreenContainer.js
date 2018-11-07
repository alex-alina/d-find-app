import * as React from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';


class MainScreenContainer extends React.Component {

  render() {
    return <div>
      <ProfilePicture userProfile={this.state.currentShown} />
      <ProfileText userProfile={this.state.currentShown} />
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