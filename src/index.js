import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from "./App/App";
import {Provider} from "react-redux";
import store from "./redux/store";
import AddMovie from "./AddMovie/AddMovie";
import history from 'history/browser';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Routes>
        <Route path="add-movie" exact={true} element={<AddMovie />} />
        <Route path="/" exact={true} element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
