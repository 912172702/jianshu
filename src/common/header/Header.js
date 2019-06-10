import React from 'react';
import { SearchWrapper, Button, Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { inputBlurAction, inputFocusAction } from './store/actionCreator';
const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo href='/' />
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
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () => {
      const action = inputFocusAction();
      dispatch(action);
    },
    handleInputBlur: () => {
      const action = inputBlurAction();
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);