import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import registerServiceWorker from "./registerServiceWorker"
import configureStore from "./store/configureStore"

import { Router } from "./components/router"

import "bulma/css/bulma.css"
import "font-awesome/css/font-awesome.css"

import "./index.css"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
