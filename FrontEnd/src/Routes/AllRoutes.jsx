import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Notes } from '../Pages/Notes'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import {PrivateRoute} from "../Private/PrivateRoute"
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PrivateRoute><Notes/></PrivateRoute>} />
            <Route path='/dashboard' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}
