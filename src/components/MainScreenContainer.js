import * as React from 'react'
import { connect } from 'react-redux'
import '../styles/MainScreenContainer.css';
import ProfilePicture from './ProfilePicture'

class MainScreenContainer extends React.Component {
state = { currentShown: {}}

randomProfileSelector = () => {
  console.log(Math.floor(Math.random() * (this.props.userProfiles.length)))
  return Math.floor(Math.random() * (this.props.userProfiles.length))
}

componentDidMount = () => {
  this.setState({
    currentShown: this.props.userProfiles[this.randomProfileSelector()]
  })
  console.log(this.state)
}

  render() {
    return <div className="main-screen">
      <h1>Main Screen</h1>
      <div className="picture-frame">
        <ProfilePicture userProfile={this.state.currentShown}/>
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