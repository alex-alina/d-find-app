import * as React from 'react'
import { connect } from 'react-redux'
import '../styles/MainScreenContainer.css';
import ProfilePicture from './ProfilePicture'

class MainScreenContainer extends React.Component {


  render() {
    return <div className="main-screen">
      <h1>Main Screen</h1>
      <div className="picture-frame">
        <ProfilePicture userProfiles={this.props.userProfiles}/>

      </div>

    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    userProfiles: state.userProfiles
  }
}

export default connect(mapStateToProps)(MainScreenContainer)