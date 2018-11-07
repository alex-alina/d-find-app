const initialState = {
  id: "iam-logged-in@gmail.com",
  name: "The Fruit Company",
  logo: "https://images.unsplash.com/photo-1521624002551-9ea092b0bc52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d3180f31423922e28f8f9b73ea95a5d&auto=format&fit=crop&w=1050&q=80",
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