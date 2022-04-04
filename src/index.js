import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'mobx-react';
import { HashRouter as Router } from "react-router-dom"
import "./index.css"
import "antd/dist/antd.min.css"
import Home from "@/views/home"
import store from '@/store';
import reportWebVitals from "./reportWebVitals"
import reactDom from "react-dom";

//需要将Router放在最外层，才能使用useLoaction

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
    <Router>
      <Home />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
