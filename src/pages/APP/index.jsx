
import { ShoppingCartProvider } from '../../Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'
import CheacKoutSideMenu from '../../Components/cheacKoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/shoes', element: <Home /> },
    { path: '/miscellaneous', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}


const App = () => {



  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheacKoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
