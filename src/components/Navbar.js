import * as React from 'react'
import { connect } from 'react-redux'
import '../styles/Navbar.css'

class Navbar extends React.Component {
  render() {
    return <div className="navbar"></div>
  }
}

const mapStateToProps = (state) => {
  return {
    userProfiles: state.userProfiles
  }
}

export default connect(mapStateToProps)(Navbar)