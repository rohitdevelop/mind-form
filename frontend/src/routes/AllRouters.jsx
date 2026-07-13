import React from 'react'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import { Route, Routes } from 'react-router-dom'
const AlllRouters = () => {
  return (
    <div>
        <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        </Routes>

     </div>
  )
}

export default AlllRouters
