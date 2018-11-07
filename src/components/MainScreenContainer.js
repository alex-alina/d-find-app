import * as React from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';
import { setShownCandidate } from '../actions/setShownCandidate'


class MainScreenContainer extends React.Component {

  passHandler = (id) => {
    this.props.setShownCandidate(id);
  }

  render() {
    return <div>
      <ProfilePicture candidateProfile={this.props.shownCandidate} />
      <button onClick={this.passHandler()}>Pass</button>
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