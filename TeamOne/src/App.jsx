
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Profile from './pages/Profile'
import Camera from './pages/Camera'
import Login from './pages/Login'
import Checks from './pages/Checks'


import EmpTableDisplay from './pages/EmpTableDisplay'
import Vacations from './pages/Vacations'
import Assignments from './pages/Assignments'


export default function App() {
 
  return (
    <Router>
      <Routes>
        <Route  path='/'  element={<Checks />} />
        <Route  path='/vacations'  element={<Vacations />} />
        <Route  path='/facial-recognition'  element={<Camera/>} /> 
        <Route  path='/login'  element={<Login />} />
        <Route path="/checks" element={<Checks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/employee list" element={<EmpTableDisplay />} />
      </Routes>
    </Router>
    
  )
}


