export const ADD_MATCH = 'ADD_MATCH'

export function addMatch(candidateId) {
  return {
    type: ADD_MATCH,
    payload: candidateId,
  }
}