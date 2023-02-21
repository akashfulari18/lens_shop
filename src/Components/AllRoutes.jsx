import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/computer_glasses'></Route>
            <Route path='/kids_glasses'></Route>
           
        </Routes>
    </div>
  )
}

export default AllRoutes