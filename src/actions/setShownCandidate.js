export const SET_SHOWN_CANDIDATE = 'SET_SHOWN_CANDIDATE'

export function setShownCandidate(currentShownID) {
  return {
    type: 'SET_SHOWN_CANDIDATE',
    payload: currentShownID
  }
}