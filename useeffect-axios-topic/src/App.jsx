import React from 'react'
import Navbar from './Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage.'
import GitUsers from './pages/GitUsers'
import Users from './pages/Users'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                 {
                    path: '/gitusers',
                    element: <GitUsers />,
                },
                 {
                    path: '/users',
                    element: <Users />,
                },
                 {
                    path: '/products',
                    element: < Products/>,
                },
                 {
                    path: '/login',
                    element: <Login />,
                },
                 {
                    path: '/register',
                    element: <Register />,
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    )
}

export default App
