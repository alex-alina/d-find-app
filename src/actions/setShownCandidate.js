export const SET_SHOWN_CANDIDATE = 'SET_SHOWN_CANDIDATE'

export function setShownCandidate(nextIndex) {
  return {
    type: 'SET_SHOWN_CANDIDATE',
    payload: nextIndex,
  }
}