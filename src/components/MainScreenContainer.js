import * as React from 'react'
import { connect } from 'react-redux'
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';

class MainScreenContainer extends React.Component {
  state = { currentShown: {} }

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
    return <div>
      <ProfilePicture userProfile={this.state.currentShown} />
      <ProfileText userProfile={this.state.currentShown} />
      <button>More</button>

    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    userProfiles: state.userProfiles
  }
}

export default connect(mapStateToProps)(MainScreenContainer)