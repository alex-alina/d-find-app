const initialState = [
 {
    id: "a@gmail.com",
    avatar: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=634&q=80",
    name: "Alex",
    age: 23,
    skills: "typing, html, javascript",
    location: "Berlin",
    elevatorPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    previousExperience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    languages: "French, English",
    portfolio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    education: "KCL",
    lookingForJob: false,
    lookingForCandidate: true,
  },
 {
    id: "b@gmail.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-0.3.5&s=e9c126fe365afcffbaba1c3e6f26fdf6&auto=format&fit=crop&w=1000&q=80",
    name: "Boris",
    age: 25,
    skills: "typing, html, javascript",
    location: "Amsterdam",
    elevatorPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    previousExperience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    languages: "French, English",
    portfolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    education: "UCL",
    lookingForJob: true,
    lookingForCandidate: false,
  },
  {
    id: "c@gmail.com",
    avatar: "https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc9cda396a112c62583f485cafcdf773&auto=format&fit=crop&w=500&q=60",
    name: "Carmen",
    age: 25,
    skills: "typing, html, javascript",
    location: "London",
    elevatorPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    previousExperience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    languages: "French, English",
    portfolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    education: "UCLA",
    lookingForJob: true,
    lookingForCandidate: false,
  },
  {
    id: "d@gmail.com",
    avatar: "https://images.unsplash.com/photo-1533264515790-38b563064b68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=facc40ae77227d7fa3f29653eddaab8e&auto=format&fit=crop&w=500&q=60",
    name: "Darryll",
    age: 25,
    skills: "typing, html, javascript",
    location: "Rotterdam",
    elevatorPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    previousExperience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    languages: "French, English",
    portfolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    education: "MIT",
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