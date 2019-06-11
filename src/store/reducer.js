import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/headerReducer';

export default combineReducers({
  header: headerReducer
});

