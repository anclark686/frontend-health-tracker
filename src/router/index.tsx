import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Root from "../views/Index";
import SettingsView from "../views/SettingsView";
import ExerciseView from "../views/ExerciseView";
import FoodView from "../views/FoodView";
import MedView from "../views/MedView";
import WaterView from "../views/WaterView";
import WeightView from "../views/WeightView";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/settings",
        element: <SettingsView />,
      },
      {
        path: "/views/exercise",
        element: <ExerciseView />,
      },
      {
        path: "/views/food",
        element: <FoodView />,
      },
      {
        path: "/views/meds",
        element: <MedView />,
      },
      {
        path: "/views/water",
        element: <WaterView />,
      },
      {
        path: "/views/weight",
        element: <WeightView />,
      },
    ]
  },
]);

export default router;
