import React, { Component, Fragment } from 'react'
import { BackTop, HomwWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Topic from './components/Topic';
import { connect } from 'react-redux';
import { changeShowScrollAction } from './store/actionCreator';
class Home extends Component {
  handleBackTop = () => {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <HomwWrapper>
          <HomeLeft>
            <img alt='' className="head-image" src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
          </HomeRight>
        </HomwWrapper>
        {this.props.showScroll ? <BackTop onClick={this.handleBackTop}>Top</BackTop> : null}
      </Fragment>
    )
  }

  componentDidMount = () => {
    this.bindEvents();
  }


  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.props.changeScroll);
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScroll: () => {
      if (document.documentElement.scrollTop > 400) {
        dispatch(changeShowScrollAction(true))
      } else {
        //console.log(document.documentElement.scrollTop);
        dispatch(changeShowScrollAction(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);