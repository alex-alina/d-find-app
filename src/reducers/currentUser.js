import Logo from "../images/FruitCompany.svg"

const initialState = {
  id: "iam-logged-in@gmail.com",
  name: "The Fruit Company",
  logo: Logo,
  location: "Amsterdam"
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    default:
    return state
  }
}

export default reducer