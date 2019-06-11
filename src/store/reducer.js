import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/headerReducer';
import homeReducer from '../pages/home/store/homeReducer'
export default combineReducers({
  header: headerReducer,
  home: homeReducer
});

