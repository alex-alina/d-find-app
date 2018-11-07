import { ADD_MATCH } from "../actions/addMatch";

const initialState = []

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MATCH:
      return state.concat(action.payload)
    default:
      return state
  }
}

export default reducer