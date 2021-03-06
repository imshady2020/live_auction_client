import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Communication from "./Communication/Communication"
import { Provider } from "react-redux"
import store from "./Store/Store"
import "./index.scss"

Communication.Initialize()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
