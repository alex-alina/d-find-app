import Logo from "../images/FruitCompany.svg"

const initialState = {
  id: "iam-logged-in@gmail.com",
  name: "The Fruit Company",
  logo: Logo,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue leo, eleifend eget risus at, sodales eleifend erat. Suspendisse in sodales erat. In hac habitasse platea dictumst. Quisque efficitur nulla at dignissim vehicula.",
  location: "Amsterdam"
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    default:
    return state
  }
}

export default reducer