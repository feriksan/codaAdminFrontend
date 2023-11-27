import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store.js'
import App from "./App.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Project from "./component/Project/Project.jsx";
import ProjectDetail from "./component/ProjectDetail/ProjectDetail.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <App/>
  </Provider>,
)
