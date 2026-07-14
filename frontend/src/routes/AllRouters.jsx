import React from 'react'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import { Route, Routes } from 'react-router-dom'
import Todo from '../pages/Home/todo'
import Navbar from '../components/Navbar'
import Profile from '../pages/profile/Profile'
const AlllRouters = () => {
  return (
    <div>
      <Navbar />
        <Routes>
         <Route path="/" element={<Todo />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/profile" element={<Profile />} />
        </Routes>

     </div>
  )
}

export default AlllRouters
