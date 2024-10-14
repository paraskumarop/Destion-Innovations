import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SidePanel from './Components/SidePanel';
import DashBoard from './Components/DashBoard';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* <SidePanel /> */}
      <Routes>
        <Route path='/' element={<DashBoard/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
