import React from 'react'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import { Route, Routes } from 'react-router-dom'
import Todo from '../pages/Home/todo'
import Navbar from '../components/Navbar'
const AlllRouters = () => {
  return (
    <div>
      <Navbar />
        <Routes>
         <Route path="/" element={<Todo />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        </Routes>

     </div>
  )
}

export default AlllRouters
