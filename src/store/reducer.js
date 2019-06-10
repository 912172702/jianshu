import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/headerReducer';

export default combineReducers({
  header: headerReducer
});

