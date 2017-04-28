export default function (state = { good: [], bad: [], current: '' }, action) {
  switch (action.type) {
    case 'ADD_GOOD':
      return {
        ...state,
        good: [...state.good, action.payload],
      };
    case 'ADD_BAD':
      return {
        ...state,
        bad: [...state.bad, action.payload],
      };
    case 'NEW_IMAGE':
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
