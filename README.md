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


