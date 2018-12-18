import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from "./redux/store/configurestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import AppRouter from "./routers/router";

const store = configureStore();


const jsx =  (
    <Provider store={store}>
       <AppRouter>
       </AppRouter>
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById("root"))