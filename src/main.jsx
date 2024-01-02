import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import Nav from './components/Nav'
import Offers from './components/Offers'
import Card_container from './components/Card_container'
import {RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet />
    </> 
  )
}

export default AppLayout




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Card_container />
      },
    ],
    errorElement : <Error />
  }
])

root.render(<RouterProvider router={appRouter} />)
