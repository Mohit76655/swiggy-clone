
import Nav from './components/Nav'
import Offers from './components/Offers'
import Card_container from './components/Card_container'
import { BrowserRouter, RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <Nav/>
    <Card_container />
    </>
  )
}



export default App
