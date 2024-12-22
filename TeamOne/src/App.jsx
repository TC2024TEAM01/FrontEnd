
import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Profile from './pages/Profile'
import Camera from './pages/Camera'
// import Login from './pages/Login'
import EmpTable from './pages/EmpTable'


function App() {
 
  return (
    // <Router>
    //   <Routes>
    //     <Route  path='/'  element={<EmpTable/>} />
    //     <Route  path='/facial-recognition'  element={<Camera/>} /> 
    //     <Route path="/profile" element={<Profile />} />
    //   </Routes>
    // </Router>
    <Camera/>
  )
}

export default App
