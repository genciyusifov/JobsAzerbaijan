import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Register from './components/AuthAcc/Register';
import Login from './components/AuthAcc/login';
import JobsPage from './pages/JobsPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path="jobs" element={<JobsPage/>} />
      </Routes>
    </Router>
    <Footer/>
    
    </>
  )

}

export default App
