import React, { Component } from 'react'
import { Content, Header, DetailWrapper } from './style'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
class Detail extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <DetailWrapper>
        <Header>Elasticsearch 的亿级数据查询毫秒级返回</Header>
        <Content>
          <img src='https://upload-images.jianshu.io/upload_images/6881750-c1e734273ff0f123?imageMogr2/auto-orient/strip%7CimageView2/2/w/515/format/webp' />
          <p>很多时候数据量大了，特别是有几亿条数据的时候，可能你会懵逼的发现，跑个搜索怎么一下 5~10s，坑爹了。
第一次搜索的时候，是 5~10s，后面反而就快了，可能就几百毫秒。</p>
          <p>你就很懵，每个用户第一次访问都会比较慢，比较卡么？所以你要是没玩儿过 ES，或者就是自己玩玩儿 Demo，被问到这个问题容易懵逼，显示出你对 ES 确实玩的不怎么样？
          说实话，ES 性能优化是没有银弹的。啥意思呢？就是不要期待着随手调一个参数，就可以万能的应对所有的性能慢的场景。</p>
          <p>也许有的场景是你换个参数，或者调整一下语法，就可以搞定，但是绝对不是所有场景都可以这样。</p>
        </Content>
      </DetailWrapper >
    )
  }
}

export default connect(null, null)(withRouter(Detail));
