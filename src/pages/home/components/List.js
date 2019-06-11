import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/range';
import * as actionCreator from '../store/actionCreator'
import { Link } from 'react-router-dom'
class List extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.articleList.map((item, index) => (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem key={index}>
                <img alt='' src={item.get('imgUrl')} />
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
          )
        }
        <LoadMore onClick={this.props.handleLoadMore}>更多文字</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.get('home').get('articleList')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadMore: () => {
      dispatch(actionCreator.reacMoreAction());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);