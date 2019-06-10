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

### Header部分的编写
