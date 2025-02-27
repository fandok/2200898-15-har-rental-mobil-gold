import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages/App/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CariMobil from "./pages/CariMobil/CariMobil.jsx";
import DetailMobil from "./pages/DetailMobil/DetailMobil.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cari-mobil",
    element: <CariMobil />,
  },
  {
    path: "/detail-mobil/:idCar",
    element: <DetailMobil />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
