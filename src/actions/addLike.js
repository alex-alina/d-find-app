export const ADD_LIKE = 'ADD_LIKE'

export function addLike(currentUserID, currentShownID) {
  return {
    type: 'ADD_LIKE',
    payload: [currentUserID, currentShownID]
  }
}