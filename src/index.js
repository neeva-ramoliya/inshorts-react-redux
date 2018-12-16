import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import configureStore from "./redux/store/configurestore";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();


const jsx =  (
    <Provider store={store}>
      React- Redux setup
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById("root"))