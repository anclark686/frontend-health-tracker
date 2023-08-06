import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./stores/store";
import router from "./router";
import { NavbarProvider } from "./contexts/NavbarContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavbarProvider>
        <RouterProvider router={router} />
      </NavbarProvider>
    </Provider>
  </React.StrictMode>
);
