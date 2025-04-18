import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/projects",
    element: <Projects />
  }
])