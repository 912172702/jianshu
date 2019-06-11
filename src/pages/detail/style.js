import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 1000px;
  /*这个是让div水平居中*/
  margin: 0 auto;
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 60%;
  }
  p{
    margin: 15px 0;
    font-size: 16px;
    line-height: 24px;
  }
`;