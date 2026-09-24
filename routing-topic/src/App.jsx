// import React from 'react'
// import Navbar from './Navbar'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import Employee from './pages/Employee'
// import Products from './pages/Products'
// import Users from './pages/Users'
// import Login from './pages/Login'
// import Register from './pages/Register'

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Navbar />
//                 <Routes>
//                     <Route path='/' element={<HomePage />} />
//                     <Route path='/employee' element={<Employee />} />
//                     <Route path='/products' element={<Products />} />
//                     <Route path='/users' element={<Users />} />
//                     <Route path='/login' element={<Login />} />
//                     <Route path='/register' element={<Register />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App




import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Employee from './pages/Employee'
import Products from './pages/Products'
import Users from './pages/Users'
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'

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
                    path: '/employee',
                    element: <Employee />,
                },
                {
                    path: '/products',
                    element: <Products />,
                },
                {
                    path: '/users',
                    element: <Users />,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/Register',
                    element: <Register />,
                },
                {
                    path: '/*',
                    element: <PageNotFound />,
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
