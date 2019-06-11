import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

//将state变成immutable型的数据
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 1,
      title: '科技进步',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ]
});

const homeReducer = (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    default:
      break;
  }
  return state;
}

export default homeReducer;