import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import User from './components/User/User'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: 'About',
//         element: <About/>,
//       },
//       {
//         path: 'Contact',
//         element: <Contact/>,
//       },
//       {
//         path: '',
//         element: <Home/>,
//       },
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)
/*<Route path='user/:userid' element={<User />} /> ye wali line mai ek chiz important hai 
path='user/:userid' iska mtlb hai ki jab bhi user/:userid mai koi bhi value aayegi toh usko userid mai store karega
 or usko User component mai pass karega ## isko useParams() hook se access karege User component mai
 ## useParams() hook se hum url se value access kar sakte hai
 ##user/:userid mai userid ek variable hai jo ki kisi bhi value ko store kar sakta hai
 ##agar hum user/1 likhte hai toh userid mai 1 store hoga
  ##agar hum user/2 likhte hai toh userid mai 2 store hoga
  ## userid bass ek naam hai ,hum kuch bhi naam rakh sakte hai lekin jo
   bhi naam rakhenge usko useParams() hook se usi naam se access karna padega
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
