import { candidatesDatabase } from "../data/candidatesDatabase";

const initialState = candidatesDatabase;

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer