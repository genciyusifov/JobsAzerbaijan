import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai';
import { FaBusinessTime } from 'react-icons/fa';
import { BiSolidBusiness } from 'react-icons/bi';
import Account from '../Header/Account';
import './Header.css';
import { AuthContext } from '../../context/AuthContext';
function Header({ succes, setSucces }) {
  const { stat , setStat } = useContext(AuthContext);
  const [state, setState] = useState(false);
  const [user, setUser] = useState(null); 
  const [company, setCompany] = useState(null); 
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedCompany = JSON.parse(localStorage.getItem('company'));
    setUser(storedUser);
    setCompany(storedCompany);
  },[stat]);
  
  const toggleMenu = () => {
    setState(!state);
  };
  

  const deleteLocal = () => {
    setStat(!stat)
    if (user) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } else if (company) {
      localStorage.removeItem('company');
      localStorage.removeItem('token');
    }
    setSucces(false);
  };
  const goProfile = () => {
    user || company ? navigate("/detail") : navigate("/login")
  }

  return (
    <>
      <div className='flex items-center justify-between p-2  md:px-44'>
        <div>
          <img
            className='w-24 md:w-28'
            src='https://www.eaton.com/content/dam/eaton/global/logos/eaton-logo-mobile.png'
            alt='logo'
          />
        </div>
        <div className='md:hidden'>
          <AiOutlineMenu className='text-3xl' onClick={toggleMenu} />
        </div>
        <div className='hidden md:flex gap-4'>
          <NavLink className='nav-link flex items-center justify-center p-2 ' to={'/'}>
            <AiOutlineHome className='mr-1' />
            Home
          </NavLink>
          <NavLink className='nav-link flex items-center justify-center p-2   ' to={'/jobs'}>
            <FaBusinessTime className='mr-1' />
            Jobs
          </NavLink>
          <NavLink className='nav-link flex items-center justify-center  ' to={'/company'}>
            <BiSolidBusiness className='mr-1' />
            Companies
          </NavLink>
          <div className='nav-link flex items-center justify-center p-2  rounded bg-slate-50 text-sm'>
            <AiOutlineLogin className='mr-1' />
            {succes || user || company ? (
              <Link to={'/login'} onClick={deleteLocal}>
                Log Out
              </Link>
            ) : (
              <Link to={'/login'}>Login</Link>
            )}
          </div>
          <div className='nav-link relative flex items-center px-1 bg-green-600 text-white cursor-pointer   rounded  ' onClick={goProfile} >
            <Account className='inline m-0' />
            <h1>{user ? user.name : company?  company.name : null}</h1>
          </div>
        </div>
      </div>
      <div className={` duration-700 bg-slate-100 flex md:hidden flex-col h-full  items-center w-56 gap-5 p-4 absolute z-40 ${state ? "right-0" : "right-[-400px]"} `}>
        <NavLink className='nav-link-mobile px-10 rounded' to={'/'}>
          Home
        </NavLink>
        <NavLink className='nav-link-mobile px-10 rounded' to={'/jobs'}>
          Jobs
        </NavLink>
        <NavLink className='nav-link-mobile px-10 rounded' to={'/company'}>
          Companies
        </NavLink>
        <div className='nav-link-mobile px-10 rounded' onClick={deleteLocal}>
          Log Out
        </div>
        <div className='nav-link relative flex items-center p-1  text-white bg-slate-300 cursor-pointer  gap-2  rounded' onClick={goProfile} >
          <Account className='inline' />
          {
            user || company ? <h1 className='text-xs'>{user ? user.name : company?  company.name : "No Name" }</h1> : null
          }
          
        </div>
      </div>
    </>
  );
}

export default Header;
