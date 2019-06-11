import React, { Component } from 'react'
import { HomwWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Recomand from './components/Recomand';
import Writer from './components/Writer';
import Topic from './components/Topic';
export default class Home extends Component {
  render() {
    return (
      <HomwWrapper>
        <HomeLeft>
          <img className="head-image" src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
        </HomeLeft>
        <HomeRight></HomeRight>
      </HomwWrapper>
    )
  }
}
