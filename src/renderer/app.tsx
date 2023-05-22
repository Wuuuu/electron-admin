import { createRoot } from "react-dom/client";
import App from "./pages/index";
import "./global.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// createBrowserRouter第二参数，可传入basename
const router = createBrowserRouter([
  {
    path: "/main_window",
    element: <App />,
  },
  {
    path: "/main_window/about",
    element: <div>About</div>,
  },
]);

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render( <RouterProvider router={router} />);
