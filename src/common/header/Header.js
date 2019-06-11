import React, { Component } from 'react';
import { SearchInfoItem, SearchInfoSwitch, SearchInfoTitle, SearchInfo, SearchWrapper, Button, Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import { Link } from 'react-router-dom'
class Header extends Component {

  getListItem = () => {
    const { list, page } = this.props;
    const pageList = [];
    const newList = list.toJS();
    for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
      pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
    }
    return pageList;
  }

  render() {
    const { handleSwitchInfo, handleMouseOut, handleMouseIn, mouseIn, focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'> 登陆</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</i>
            <SearchInfo onMouseLeave={handleMouseOut} onMouseEnter={handleMouseIn} style={{ display: (focused || mouseIn) ? 'block' : 'none' }}>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => handleSwitchInfo(this.spin)}>
                  <i ref={(spin) => { this.spin = spin; }} className='iconfont'>&#xe851;</i>换一批
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <div>
                {this.getListItem()}
              </div>
            </SearchInfo>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='write-btn'>
            <i className='iconfont'>&#xe61d;</i>写文章
          </Button>
          <Button className='sign-up'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  };
}
const mapStateToProps = (state) => {
  return {
    //immutable，必须通过get方法拿到值，否则无效
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouseIn: state.get('header').get('mouseIn')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () => {
      //const action = inputFocusAction();
      dispatch(actionCreator.inputFocusAction());
      dispatch(actionCreator.getListAction());
    },
    handleInputBlur: () => {
      //const action = inputBlurAction();
      dispatch(actionCreator.inputBlurAction());
    },
    handleMouseIn: () => {
      dispatch(actionCreator.mouseInAction())
    },
    handleMouseOut: () => {
      dispatch(actionCreator.mouseOutAction());
    },
    handleSwitchInfo: (spin) => {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      originAngle = originAngle ? parseInt(originAngle) : 0;
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      dispatch(actionCreator.switchInfoAction());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);