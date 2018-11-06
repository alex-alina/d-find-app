[1mdiff --git a/src/features/CandidateLikeBtn/CandidateActionLike.js b/src/features/CandidateLikeBtn/CandidateActionLike.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/CandidateLikeBtn/CandidateLikeBtn.js b/src/features/CandidateLikeBtn/CandidateLikeBtn.js[m
[1mdeleted file mode 100644[m
[1mindex 2c74aea..0000000[m
[1m--- a/src/features/CandidateLikeBtn/CandidateLikeBtn.js[m
[1m+++ /dev/null[m
[36m@@ -1,9 +0,0 @@[m
[31m-import * as React from 'react'[m
[31m-[m
[31m-export default function candidateLikeBtn(props) {[m
[31m-  return ([m
[31m-    <div>[m
[31m-      <button onClick>Like</button>[m
[31m-    </div>[m
[31m-  )[m
[31m-}[m
\ No newline at end of file[m
[1mdiff --git a/src/features/CandidateLikeBtn/CandidateLikeBtnContainer.js b/src/features/CandidateLikeBtn/CandidateLikeBtnContainer.js[m
[1mdeleted file mode 100644[m
[1mindex f622fee..0000000[m
[1m--- a/src/features/CandidateLikeBtn/CandidateLikeBtnContainer.js[m
[1m+++ /dev/null[m
[36m@@ -1,2 +0,0 @@[m
[31m-import * as React from 'react'[m
[31m-import {likeBtnUi} from './CandidateLikeBtn'[m
\ No newline at end of file[m
[1mdiff --git a/src/features/CandidateLikeBtn/CandidateLikeBtnStyle.css b/src/features/CandidateLikeBtn/CandidateLikeBtnStyle.css[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/CandidateLikeBtn/CandidateReducerLike.js b/src/features/CandidateLikeBtn/CandidateReducerLike.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/feature-template.1/action.js b/src/features/feature-template.1/action.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/feature-template.1/componentContainer.js b/src/features/feature-template.1/componentContainer.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/feature-template.1/componentStyle.css b/src/features/feature-template.1/componentStyle.css[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/feature-template.1/componentUi.js b/src/features/feature-template.1/componentUi.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/feature-template.1/reducer.js b/src/features/feature-template.1/reducer.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/mainscreen/MainScreenContainer.css b/src/features/mainscreen/MainScreenContainer.css[m
[1mdeleted file mode 100644[m
[1mindex ccc3163..0000000[m
[1m--- a/src/features/mainscreen/MainScreenContainer.css[m
[1m+++ /dev/null[m
[36m@@ -1,7 +0,0 @@[m
[31m-.main-screen {[m
[31m-  width: 500px;[m
[31m-  height: 75vh;[m
[31m-  border: 5px solid grey;[m
[31m-  margin: auto;[m
[31m-  padding: 10px;[m
[31m-}[m
\ No newline at end of file[m
[1mdiff --git a/src/features/mainscreen/MainScreenContainer.js b/src/features/mainscreen/MainScreenContainer.js[m
[1mdeleted file mode 100644[m
[1mindex 5939990..0000000[m
[1m--- a/src/features/mainscreen/MainScreenContainer.js[m
[1m+++ /dev/null[m
[36m@@ -1,27 +0,0 @@[m
[31m-import * as React from 'react'[m
[31m-import { connect } from 'react-redux'[m
[31m-import './MainScreenContainer.css';[m
[31m-import ProfilePicture from './components/ProfilePicture'[m
[31m-[m
[31m-class MainScreenContainer extends React.Component {[m
[31m-[m
[31m-[m
[31m-  render() {[m
[31m-    return <div className="main-screen">[m
[31m-      <h1>Main Screen</h1>[m
[31m-      <div className="picture-frame">[m
[31m-        <ProfilePicture userProfiles={this.props.userProfiles}/>[m
[31m-[m
[31m-      </div>[m
[31m-[m
[31m-    </div>[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-const mapStateToProps = (state) => {[m
[31m-  return {[m
[31m-    userProfiles: state.userProfiles[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-export default connect(mapStateToProps)(MainScreenContainer)[m
\ No newline at end of file[m
[1mdiff --git a/src/features/mainscreen/components/ProfilePicture.js b/src/features/mainscreen/components/ProfilePicture.js[m
[1mdeleted file mode 100644[m
[1mindex d6fd309..0000000[m
[1m--- a/src/features/mainscreen/components/ProfilePicture.js[m
[1m+++ /dev/null[m
[36m@@ -1,8 +0,0 @@[m
[31m-import * as React from 'react'[m
[31m-[m
[31m-export default function ProfilePicture(props) {[m
[31m-[m
[31m-  return (<div>[m
[31m-    <img src={props.userProfiles.userProfile1.avatar} alt="" height="500" width="500"></img>[m
[31m-  </div>)[m
[31m-}[m
\ No newline at end of file[m
[1mdiff --git a/src/features/mainscreen/components/ProfileText.js b/src/features/mainscreen/components/ProfileText.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/features/mainscreen/reducers/userProfiles.js b/src/features/mainscreen/reducers/userProfiles.js[m
[1mdeleted file mode 100644[m
[1mindex eeaca65..0000000[m
[1m--- a/src/features/mainscreen/reducers/userProfiles.js[m
[1m+++ /dev/null[m
[36m@@ -1,44 +0,0 @@[m
[31m-const initialState = {[m
[31m-  userProfile1: {[m
[31m-    id: "alex.moon@gmail.com",[m
[31m-    avatar: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=634&q=80",[m
[31m-    name: "Alex",[m
[31m-    age: 23,[m
[31m-    skills: ["typing", "html", "javascript"],[m
[31m-    location: "Berlin",[m
[31m-    previousExperience: "",[m
[31m-    languages: [],[m
[31m-    portfolio: [],[m
[31m-    education: [],[m
[31m-    lookingForJob: false,[m
[31m-    lookingForCandidate: true,[m
[31m-  },[m
[31m-  userProfile2: {[m
[31m-    id: "alex.moon@gmail.com",[m
[31m-    avatar: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=634&q=80",[m
[31m-    name: "Alex",[m
[31m-    age: 23,[m
[31m-    skills: ["typing", "html", "javascript"],[m
[31m-    location: "Amsterdam",[m
[31m-    previousExperience: "",[m
[31m-    languages: [],[m
[31m-    portfolio:[],[m
[31m-    education: [],[m
[31m-    lookingForJob: true,[m
[31m-    lookingForCandidate: false,[m
[31m-  },[m
[31m-}[m
[31m-[m
[31m-const reducer = (state = initialState, action = {}) => {[m
[31m-  switch (action.type) {[m
[31m-    case 'ADD_USER':[m
[31m-      return [[m
[31m-        ...state,[m
[31m-        action.payload[m
[31m-      ][m
[31m-    default:[m
[31m-      return state[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-export default reducer[m
\ No newline at end of file[m
