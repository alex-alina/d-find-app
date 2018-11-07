import { ADD_LIKED_CANDIDATE } from "../actions/addLikedCandidate";

const initialState = []

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIKED_CANDIDATE:
      return state.concat(action.payload)
    default:
    return state
  }
}

export default reducer