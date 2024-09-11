
import { Signin } from './Routes/Signin'
import { Signup } from './Routes/Signup'
import { Home } from './Routes/Home'
import { Pages } from './Routes/Pages'
import { Target } from './Routes/Target'
import { Profile } from './Routes/Profile'
import { Personalization } from './Routes/Personalization'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Routes/Protected'
import { Reset } from './Routes/Reset'
import { Container, Navbar } from 'react-bootstrap'
import Topbar from "./Components/Navbar/Topbar";
import './App.css'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Protected><Container><Home/></Container></Protected>
    },
    {
      path:"/home",
      element:<Protected><Container><Home/></Container></Protected>
    },
    {
      path:"/pages",
      element:<Protected><Pages/></Protected>
    },
    {
      path:"/target",
      element:<Protected><Container><Target/></Container></Protected>
    },
    {
      path:"/personalization",
      element:<Protected><Container><Personalization/></Container></Protected>
    },
    {
      path:"/profile",
      element:<Protected><Container><Profile/></Container></Protected>
    },
    {
      path:"/signin",
      element:<Container><Topbar></Topbar><Signin></Signin></Container>
    },
    {
      path:"/signup",
      element:<Container><Topbar></Topbar><Signup></Signup></Container>
    },
    {
      path:"/reset",
      element:<Container><Topbar></Topbar><Reset></Reset></Container>
    }

  ])

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  )
}

export default App
