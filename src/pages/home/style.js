import styled from 'styled-components';

export const HomwWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  /*这个是让div水平居中*/
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px; 
  .head-image{
    width: 100%;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
  background-color: hsla(0,0%,71%,.2);
`;

export const TopicWrapper = styled.div`
  /*触发BFC，让他的高度适配内层的高度，因为内层元素的float的*/
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  margin-top: -10px;
`;

export const TopicItem = styled.div`
  float: left;
  background: #F7F7F7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  img{
    width: 32px;
    height: 32px;
    /*这里加一个float使他不影响文字的同父标签文字的居中显示*/
    float: left;
    display: block;
    margin-right: 10px;
  }
`;