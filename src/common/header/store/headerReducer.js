import { INPUT_BLUR, INPUT_FOCUS } from './actionTypes'
const defaultState = {
  focused: false
}

const headerReducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case INPUT_FOCUS:
      newState.focused = true;
      break;
    case INPUT_BLUR:
      newState.focused = false;
      break;
    default:
      break;
  }
  return newState;
}

export default headerReducer;