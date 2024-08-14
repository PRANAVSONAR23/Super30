import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './forRouter/Home.jsx'
import About from './forRouter/About.jsx'
import Contact from './forRouter/Contact.jsx'

import { Provider } from 'react-redux'
import { store } from './store.js'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacts from './forRouter/Contacts.jsx'

const router=createBrowserRouter([
  {
      path:"/",
      element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
},
{
  path:"/contact",
  element:<Contact/>,
  children:[
    {
      path:"/contact/:id",
      element:<Contacts/>
    },
  ]
},

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <Provider store={store}> */}
    {/* <RouterProvider router={router}> */}
    <Provider store={store}>
    <App />

   </Provider>
    {/* </RouterProvider> */}

    {/* </Provider> */}

    
  </React.StrictMode>,
)
