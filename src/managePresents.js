const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  switch (action.type) {
    case "presents/increase":
      return {...state, numberOfPresents: initialState.numberOfPresents + 1 }
    default:
      return state;
  }
}
