import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

import ScrollToTop from "./components/Scroll-top.component";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        {/*Cart Items stay when refreshed*/}
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
