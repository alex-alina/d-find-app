import * as React from 'react'
import { connect } from 'react-redux'
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText'
import { addLike } from '../actions/addLike';


class MainScreenContainer extends React.Component {
  state = { currentShown: {} }

  randomProfileSelector = () => {
    console.log(Math.floor(Math.random() * (this.props.userProfiles.length)))
    return Math.floor(Math.random() * (this.props.userProfiles.length))
  }

  componentDidMount = () => {
    this.updateCurrentShown();
    console.log(this.state)
  }

  updateCurrentShown = () => {
    this.setState({
      currentShown: this.props.userProfiles[this.randomProfileSelector()]
    })
  }

  likeHandler = () => {
    this.props.addLike(this.props.currentUser.id, this.state.currentShown.id);
    this.updateCurrentShown()
  }

  render() {
    return <div>
      <ProfilePicture userProfile={this.state.currentShown} />
      <button onClick={this.updateCurrentShown}>Pass</button>
      <button onClick={this.likeHandler}>Like</button>
      <ProfileText userProfile={this.state.currentShown} />
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    userProfiles: state.userProfiles,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { addLike })(MainScreenContainer)