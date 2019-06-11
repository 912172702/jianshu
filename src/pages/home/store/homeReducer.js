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
      id: 2,
      title: '科技进步',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ],

  articleList: [{
    id: 1,
    title: 'Elasticsearch 的亿级数据查询毫秒级返回',
    desc: '很多时候数据量大了，特别是有几亿条数据的时候，可能你会懵逼的发现，跑个搜索怎么一下 5~10s，坑爹了。 第一次搜索的时候，是 5~10s，后面...',
    imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }, {
    id: 2,
    title: 'Elasticsearch 的亿级数据查询毫秒级返回',
    desc: '很多时候数据量大了，特别是有几亿条数据的时候，可能你会懵逼的发现，跑个搜索怎么一下 5~10s，坑爹了。 第一次搜索的时候，是 5~10s，后面...',
    imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }],
  recommendList: [
    {
      id: 1,
      imageUrl: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      imageUrl: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ],
  showScroll: false
});

const homeReducer = (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case actionTypes.CHANGE_ARTICLE_LIST:
      console.log(actionTypes.CHANGE_ARTICLE_LIST, action.articles);
      return state.set('articleList', state.get('articleList').concat(action.articles));
    case actionTypes.CHAGE_SHOW_SCROLL:
      return state.set('showScroll', action.show);
    default:
      break;
  }
  return state;
}

export default homeReducer;