import * as React from 'react';
import { connect } from 'react-redux';
import UserProfilePicture from './CurrentUserProfilePicture';
import Navbar from './Navbar';
import CurrentUserProfileInfo from './CurrentUserProfileInfo';
import '../styles/CurrentUserProfilePage.css';
import Backbutton from '../images/Back.svg';
import { Link } from 'react-router-dom';


class CurrentUserProfilePage extends React.Component {

  render() {
    return <div>
      <Link to='/'><img src={Backbutton} alt="back-button" className="back-button"></img></Link>
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