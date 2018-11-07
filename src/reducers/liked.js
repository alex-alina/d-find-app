import { ADD_LIKE } from '../actions/addLike'

const reducer = (state = {}, action = []) => {
  switch (action.type) {
    case ADD_LIKE:
      const userID = action.payload[0]
      const likedID = action.payload[1]

      let newState = {...state}

      if (userID in newState) {
        return newState[userID].concat(likedID)
      } else {
        return {
          ...state,
          [userID]: [likedID]
        }
      }
    default:
      return state
  }
}

export default reducer