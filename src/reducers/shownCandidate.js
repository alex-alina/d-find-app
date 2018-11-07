import { candidatesDatabase } from '../data/candidatesDatabase'

const profileSelector =  () => {
  return candidatesDatabase[Math.floor(Math.random() * (candidatesDatabase.length))]
}

const reducer = (state = profileSelector(), action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer