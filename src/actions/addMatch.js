export const ADD_MATCH = 'ADD_MATCH'

export function addMatch(shownCandidateId) {
  return {
    type: ADD_MATCH,
    payload: [shownCandidateId]
  }
}