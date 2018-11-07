export const ADD_MATCH = 'ADD_MATCH'

export function addMatch(shownCandidate, currentUserID) {
  if (shownCandidate.likedCompanies.includes(currentUserID)) {
    return {
      type: ADD_MATCH,
      payload: shownCandidate.id,
    }
  } else {
    return {
      type: 'NO_MATCH',
    }
  }
}