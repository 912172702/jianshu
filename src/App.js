import React, { Fragment } from 'react';
import { GlobalStyle } from './style';
import { GlobalIconFont } from './static/image/iconfont/iconfont';
import Header from './common/header/Header'
import { Provider } from 'react-redux';
import store from './store/index'
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconFont />
        <Header />
      </Provider>
    </Fragment>
  );
}

export default App;
