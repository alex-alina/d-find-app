const initialState = [
 {
    id: "alex.moon@gmail.com",
    avatar: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=634&q=80",
    name: "Alex",
    age: 23,
    skills: ["typing", "html", "javascript"],
    location: "Berlin",
    previousExperience: "",
    languages: [],
    portfolio: [],
    education: [],
    lookingForJob: false,
    lookingForCandidate: true,
  },
 {
    id: "alex.moon@gmail.com",
    avatar: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=634&q=80",
    name: "Alex",
    age: 23,
    skills: ["typing", "html", "javascript"],
    location: "Amsterdam",
    previousExperience: "",
    languages: [],
    portfolio:[],
    education: [],
    lookingForJob: true,
    lookingForCandidate: false,
  },
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default reducer