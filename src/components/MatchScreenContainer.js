import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CompanyImg from './CompanyImg';
import ProfileImg from './ProfileImg';
import MatchedScreenBackground from './MatchedScreenBackground';
import MatchedScreenMessageBtn from './MatchedScreenMessageBtn';
import MatchedScreenBackBtnContainer from './MatchedScreenBackBtnContainer';
import '../styles/MatchScreen.css';
import MatchScreenTopIcons from './Match ScreenTopIcons';



class MatchScreenContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <MatchedScreenBackground />

        <MatchScreenTopIcons />

        <div className="images-container-company">
          <CompanyImg />
        </div>

        <div className="images-container-profile">
          <ProfileImg source={this.props.profileImg} />
        </div>

        <div className="match-h1">
          <h1>It's a match!</h1>
        </div>

        <div className="match-p">
          <p>Do you want to send a message?</p>
        </div>

        <MatchedScreenMessageBtn />

        <MatchedScreenBackBtnContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileImg: state.shownCandidate.avatar
  }
}

export default connect(mapStateToProps)(MatchScreenContainer)