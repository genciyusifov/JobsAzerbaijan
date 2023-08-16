import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './components/AuthAcc/login';
import JobsPage from './pages/JobsPage';
import Footeer from './components/Footer';
import Register from './components/AuthAcc/Register/Register';
import { useEffect, useState } from 'react';
import Company from './pages/Company';
import UserProfile from './components/ProfileDetails/UserProfile';
import "./index.css"
function App() {
  const [succes , setSucces] = useState(false)
  const user = localStorage.getItem("user")
  useEffect(()=> {
    user ? setSucces(true) : false
  },[])

  return (

    <>
    <Header succes={succes} setSucces={setSucces} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='register' element={<Register  />} />
        <Route path='login' element={<Login  setSucces={setSucces} />  } />
        <Route path='detail' element={<UserProfile succes={succes} />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="company" element={<Company/>} />
      </Routes>
    <Footeer/>
    </>
  )

}

export default App
