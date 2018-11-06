import * as React from 'react'
import { connect } from 'react-redux'
import './MainScreenContainer.css';

class MainScreenContainer extends React.Component {


  render() {
    return <div className="main-screen">
      <h1>Main Screen</h1>

    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    userProfiles: state.userProfiles
  }
}

export default connect(mapStateToProps)(MainScreenContainer)