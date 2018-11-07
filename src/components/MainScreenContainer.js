import * as React from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';


class MainScreenContainer extends React.Component {
 /*  state = { currentShown: {} }



  componentDidMount = () => {
    this.updateCurrentShown();
    console.log(this.state)
  }

  updateCurrentShown = () => {
    this.setState({
      currentShown: this.props.userProfiles[this.randomProfileSelector()]
    })
  } */

  render() {
    return <div>
      <ProfilePicture userProfile={this.state.currentShown} />
      <ProfileText userProfile={this.state.currentShown} />
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
  }
}

export default connect(mapStateToProps)(MainScreenContainer)