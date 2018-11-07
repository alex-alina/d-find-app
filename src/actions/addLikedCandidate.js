export const ADD_LIKED_CANDIDATE = "ADD_LIKED_CANDIDATE_"

export function addLikedCandidate(shownCandidateId) {
  return {
    type: ADD_LIKED_CANDIDATE,
    payload: [shownCandidateId]
  }
}