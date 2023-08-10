import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Galery from './components/Galery'
import Register from './components/AuthAcc/Register';
import Login from './components/AuthAcc/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path="gallery" element={<Galery />} />
      </Routes>
    </Router>
  )

}

export default App
