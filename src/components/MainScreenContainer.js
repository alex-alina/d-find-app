import * as React from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';
import LikeBtnContainer from './LikeBtnContainer';
import { setShownCandidate } from '../actions/setShownCandidate'
import PassBtnContainer from './PassBtnContainer';
import MessagesButton from '../images/MessagesButton.svg';
import '../styles/mainScreen.css'

class MainScreenContainer extends React.Component {

  render() {
    return <div className="box">
      <ProfilePicture candidateProfile={this.props.shownCandidate} />
      <div className="button-container">
        <LikeBtnContainer />
        <img src={MessagesButton} alt="message" className="message-button"></img>
        <PassBtnContainer />
      </div>
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