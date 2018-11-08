import * as React from 'react';
import { connect } from 'react-redux';
import UserProfilePicture from './CurrentUserProfilePicture';
import Navbar from './Navbar';
import CurrentUserProfileInfo from './CurrentUserProfileInfo';
import '../styles/UserProfile.css'


class CurrentUserProfilePage extends React.Component {

  render() {
    return <div>
      <div className="box">
        <UserProfilePicture currentUserProfile={this.props.currentUser} />
        <CurrentUserProfileInfo />
      </div>
      <Navbar />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, {})(CurrentUserProfilePage)