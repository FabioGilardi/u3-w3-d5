// import React from "react";
// import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
