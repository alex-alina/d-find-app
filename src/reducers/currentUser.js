const initialState = {
  id: "Z@gmail.com",
  avatar: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=634&q=80",
  name: "Zora",
  age: 23,
  title: "Back-end Developer",
  skills: "typing, html, javascript",
  location: "Berlin",
  elevatorPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  previousExperience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  languages: "Spanish, English",
  portfolio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  education: "UVA",
  lookingForJob: false,
  lookingForCandidate: true,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_CURRENT_USER':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default reducer