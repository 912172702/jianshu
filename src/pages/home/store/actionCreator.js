import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
export const changeArticleAction = (articles) => {
  return {
    type: actionTypes.CHANGE_ARTICLE_LIST,
    articles: fromJS(articles)
  }
}
export const reacMoreAction = () => {
  return (dispatch) => {
    axios.get('/api/articleInfo.json').then(res => {
      dispatch(changeArticleAction(res.data.articles));
    }).catch(e => {
      console.log(e);
    })
  }
}

export const changeShowScrollAction = (show) => {
  return {
    type: actionTypes.CHAGE_SHOW_SCROLL,
    show
  }
}