import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CompanyImg from './CompanyImg';
import ProfileImg from './ProfileImg';
import MatchedScreenBackground from './MatchedScreenBackground';
import MatchedScreenMessageBtn from './MatchedScreenMessageBtn';
import MatchedScreenBackBtn from './MatchedScreenBackBtn';
import '../styles/MatchScreen.css';
import MatchScreenTopIcons from './Match ScreenTopIcons';



class MatchScreenContainer extends Component {

  render() {
    console.log(this.props.companyImg)
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
          <h1>Is's a match!</h1>
        </div>

        <div className="match-p">
          <p>Do you want to send a message?</p>
        </div>

        <MatchedScreenMessageBtn />

        <MatchedScreenBackBtn />
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