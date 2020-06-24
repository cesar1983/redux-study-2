import * as actionTypes from "../actions";

const initialState = { persons: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(), // not really unique but good enough here!
          name: action.payload.name,
          age: action.payload.age,
        }),
      };
    case actionTypes.DELETE:
      const copiedState = { ...state };
      return {
        ...state,
        persons: copiedState.persons.filter(
          (person) => person.id !== action.payload.personId
        ),
      };
    default:
      break;
  }

  return state;
};

export default reducer;
