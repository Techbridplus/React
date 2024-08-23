import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Createpost from './pages/Createpost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='createpost' element={<Createpost/>}/>
      <Route path='all-posts' element={<AllPosts/>}/>
      <Route path='post/:postID' element={<Post/>}/>
      <Route path='edit-post/:slug' element={<EditPost/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
