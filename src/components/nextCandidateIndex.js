export const nextCandidateIndex = (shownCandidate, candidates) => {
  const currentIndex = candidates.indexOf(shownCandidate)
  const nextIndex = currentIndex + 1;
  if (nextIndex <= candidates.length - 1) {
    return nextIndex;
  } else {
    return null
  }
}