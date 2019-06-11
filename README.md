# React学习

## 简书实现

### styled-components管理css文件

这个是把所有的css文件替换成js，并且用js文件统一管理CSS样式，可以针对不同组件定义不同的样式代码。

首先创建 style.js

```js
//视频中的injectGlobal被弃用了，换成createGlobalStyle
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background:green;
  }
`
```

然后在组件中引用自己需要的样式，比如在App组件中

```jsx
import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
function App() {
  return (
    <Fragment>
      <GlobalStyle />
    </Fragment>
  );
}
export default App;
```

这样就可以将css文件统一放到js文件中管理，很方便

```jsx
import styled from 'styled-components';
export const HeaderWrapper = styled.div`  
    height: 56px;
    background: red;
`
```

这里定义了一个HeaderWrapper组件，他是一个样式组件，styled.div声明它本身是一个div,只要在其他组件中调用就可以了。如下

```jsx
import React, { Component } from 'react';
import { HeaderWrapper } from './style'
export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>header</HeaderWrapper>
    )
  }
}
```

### Header部分的编写

### 使用iconfont.cn查找图标

### 利用react-redux管理数据

### combineReducers分散reducer

### immutable.js 不可被改变的对象，保证state不被改变

### redux-immutable 让总的state也变成一个immutable对象

### react的路由

安装依赖 react-router-dom

路由可以实现页面的跳转

### PureComponent禁止修改state所有组件都重新渲染

### 不要用a标签做路由的跳转，要用react-router-dom的Link组件签

Link标签使得单页应用禁止加载多次html

### 动态路由进行参数传递

在路由中

```jsx
<Route path='/' exact component={Home}></Route>
<Route path='/detail/:id' exact component={Detail}></Route>
 ```

这个id就可以作为参数传过去,注意这里的属性是component而不是render，否则拿不到

 在Detail组件中

 ```jsx
 this.props.match.params.id
 ```

即可获得传递过来的id

### 通过 url的？参数传参数(不建议)

/detail?id=1

在detail中

```jsx
this.props.location.search  // ?id=1
```

### 利用Redirect组件实现登陆后重定向到首页

Redirect 在 react-router-dom 里

```jsx
return Redirect<to='/' />;
```

### React中的异步组件

使用依赖react-loadable

所有加载的js文件都在bundle.js中

如果想让一个组件成为异步加载的，在那个组件的目录下新建一个loadable.js文件，内容如下

```jsx
iimport React from 'react'
import Loadable from 'react-loadable'
const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading: () => (<div>正在加载</div>)
});
export default () => <LoadableComponent />
```

这样就把这个index.js文对应的组件都变成可异步加载的了。当我不访问这个组件的时候，浏览器不加载这个组件的js文件。

这时候在路由中这样引入Detail

```jsx
import Detail from './pages/detail/loadable';
```

这样的话我们从Detail就不能通过props拿到动态路由传来的参数了。因为路由把参数传递给了被异步组件包裹的Detail，并没有直接给Detail，这是胡我们在Detail中引入如下函数。

```jsx
import { withRouter } from 'react-router-dom'
```

在export的时候，我们这样export

```jsx
export default connect(null, null)(withRouter(Detail));
```

withRouter方法的意思是让某个组件可以访问Router中的属性。

