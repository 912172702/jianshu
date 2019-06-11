import styled from 'styled-components';
import logoPic from '../../static/image/logo.png'
export const HeaderWrapper = styled.div` 
    height: 56px;
    border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background: url(${logoPic});
  background-size: contain
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  border-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17xp;
  color: #787878;
  &.left{
    float:left
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a
  } 
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  /*&前缀表示它本身如果有某个className，本身*/
  &.focused{
    width: 240px;
  }

  &.slide-enter{
    width:160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }

  &.slide-exit{
    width: 240px;
    transition: all .2s ease-out
  }
  &.slide-exit-active{
    width: 160px;
  }

  &::placeholder{
    color: #999
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149
  margin-right: 20px;
  padding: 0 20px; 
  font-size: 14px;

  &.sign-up{
    color: #ec6149
  }

  &.write-btn{
    color: white;
    background: #ec6149
    .iconfont{
      margin-right: 4px;
    }
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    /*line-height会把内容垂直居中*/
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff;
    }
  }

`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    
    padding: 0 20px 10px 20px;
    /*background: green;*/
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;

`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  .iconfont{
    font-size: 12px;
    margin-right: 2px;
    float: left;
    transition: all .2s ease-in;
    transform-origin: center;
  }
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin: 5px 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 2px;
`;