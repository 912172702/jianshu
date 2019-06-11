import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

//将state变成immutable型的数据
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

const headerReducer = (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case actionTypes.INPUT_FOCUS:
      // newState.focused = true;
      return state.set('focused', true);
    case actionTypes.INPUT_BLUR:
      return state.set('focused', false);
    case actionTypes.INIT_LIST:
      //console.log('totalPage : ', Math.ceil(action.list.toJS().length / 10));
      return state.set('list', action.list).set('totalPage', Math.ceil(action.list.toJS().length / 10));
    case actionTypes.MOUSE_IN:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_OUT:
      return state.set('mouseIn', false);
    case actionTypes.SWITCH_INFO:
      //console.log('totalPage : ', state.get('totalPage'));
      return state.set('page', state.get('page') == state.get('totalPage') ? 1 : (state.get('page') + 1));
    default:
      break;
  }
  return state;
}

export default headerReducer;