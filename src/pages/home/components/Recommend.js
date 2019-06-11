import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux';

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.recommendList.map(item => <RecommendItem key={item.get('id')} imageUrl={item.get('imageUrl')}></RecommendItem>)
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}
export default connect(mapStateToProps, null)(Recommend);