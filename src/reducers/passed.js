const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'PASSED':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default reducer