import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import { NavbarProvider } from "./contexts/NavbarContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavbarProvider>
      <RouterProvider router={router} />
    </NavbarProvider>
  </React.StrictMode>
);
