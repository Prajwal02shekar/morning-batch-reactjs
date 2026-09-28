import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import AddMovie from './pages/AddMovie'
import DisplayMovie from './pages/DisplayMovie'

const App = () => {
    let router=createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:"/",
                    element:<HomePage/>
                },
                {
                    path:"/addMovie",
                    element:<AddMovie/>
                },
                {
                    path:"/displayMovie",
                    element:<DisplayMovie/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
