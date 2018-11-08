import * as React from 'react'
import { connect } from 'react-redux'
import '../styles/Navbar.css'
import MENU_PROFILE from '../images/MENU_PROFILE.svg';
import MENU_SEARCH from '../images/MENU_SEARCH.svg';
import MENU_MESSAGES from '../images/MENU_MESSAGES.svg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return <div className="navbar">
    <Link to={ `/currentUser/${this.props.currentUser.id}`}><img src={MENU_PROFILE} alt="link-to-current-User-profile" className="menu-profile-button"></img></Link>
    <img src={MENU_SEARCH} alt="link-to-search" className="menu-search-button"></img>
    <img src={MENU_MESSAGES} alt="link-to-history" className="menu-messages-button"></img>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    userProfiles: state.userProfiles,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Navbar)