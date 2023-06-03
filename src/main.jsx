import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomeContent from './pages/HomeContent.jsx';
import Destination from './pages/Destination.jsx';
import './index.css'
import Crew from './pages/Crew.jsx';
import Technology from './pages/Technology.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeContent />,
      },
      {
        path: "/Destination",
        element: <Destination />,
      },
      {
        path: "/Crew",
        element: <Crew />,
      },
      {
        path: "/Technology",
        element: <Technology />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
