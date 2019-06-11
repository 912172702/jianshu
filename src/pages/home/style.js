import styled from 'styled-components';

export const HomwWrapper = styled.div`
  overflow: hidden;
  width: 1000px;
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
  width: 280;
  float: right;
`;

export const TopicWrapper = styled.div`
  /*触发BFC，让他的高度适配内层的高度，因为内层元素的float的*/
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  margin-top: -10px;
  border-bottom: 1px solid #dcdcdc
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

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  img{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
  h3{
    font-size: 18px;
    line-height: 27px;
    /*下面这个font-weight使得字体加粗*/
    font-weight: bold;
    color: #333;
  }
  p{
    font-size: 13px;
    line-height: 24px;
    color: #999
  }
`;

export const ListInfo = styled.div`

`;

export const RecommendWrapper = styled.div`
  margin:30px;
  width: 280;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imageUrl});
  background-size: contain;
  margin-bottom: 10px;
  border-radius: 5px;
`;


export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    cursor: pointer;
`;