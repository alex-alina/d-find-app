import * as React from 'react'
import { connect } from 'react-redux'

class UserProfilePage extends React.Component {

  render() {
    return <div>
     <h1>It's a mee maario</h1>
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    userProfiles: state.userProfiles
  }
}

export default connect(mapStateToProps)(UserProfilePage)