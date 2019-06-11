import React, { Fragment } from 'react';
import { GlobalStyle } from './style';
import { GlobalIconFont } from './static/image/iconfont/iconfont';
import Header from './common/header/Header'
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './store/index'
import Home from './pages/home/index'
import Detail from './pages/detail/index';
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconFont />
        <Header />
        <BrowserRouter>
          <Route path='/' exact render={() => <Home />}></Route>
          <Route path='/detail' exact render={() => <Detail />}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
