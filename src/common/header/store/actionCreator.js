import * as actionTypes from './actionTypes'
import axios from 'axios';
import { Exception } from 'handlebars';

import { fromJS } from 'immutable';

export const inputFocusAction = () => {
  return {
    type: actionTypes.INPUT_FOCUS
  }
};

export const inputBlurAction = () => {
  return {
    type: actionTypes.INPUT_BLUR
  }
};

export const initListAction = (list) => {
  return {
    type: actionTypes.INIT_LIST,
    list: fromJS(list)
  }
}
export const getListAction = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      if (res.data.succ) {
        dispatch(initListAction(res.data.data));
      } else {
        throw new Exception("请求失败");
      }
    }).catch(e => {
      console.log(e);
    })
  }
}

export const mouseInAction = () => {
  return {
    type: actionTypes.MOUSE_IN
  }
}

export const mouseOutAction = () => {
  return {
    type: actionTypes.MOUSE_OUT
  }
}

export const switchInfoAction = () => {
  return {
    type: actionTypes.SWITCH_INFO
  }
}
