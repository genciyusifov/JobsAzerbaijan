import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai';
import { FaBusinessTime } from 'react-icons/fa';
import { BiSolidBusiness } from 'react-icons/bi';
import Account from '../Header/Account';
import './Header.css';

function Header({ succes, setSucces }) {
  const [state, setState] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const company = JSON.parse(localStorage.getItem('company'));
  const navigate = useNavigate()

  const toggleMenu = () => {
    setState(!state);
  };

  const deleteLocal = () => {
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
    <div className='bg-slate-100 '>
      <div className='flex items-center justify-between p-2 border-b-2 md:px-44'>
        <div>
          <img
            className='w-8 md:w-12'
            src='https://images.squarespace-cdn.com/content/v1/5941dba2b3db2bab435fa5a7/c47baec4-8fde-4e41-a2f8-7bb6fe0ac913/hiring+icon.png'
            alt='logo'
          />
        </div>
        <div className='md:hidden'>
          <AiOutlineMenu className='text-3xl' onClick={toggleMenu} />
        </div>
        <div className='hidden md:flex gap-5'>
          <NavLink className='nav-link flex items-center justify-center p-1 rounded' to={'/'}>
            <AiOutlineHome className='mr-1' />
            Home
          </NavLink>
          <NavLink className='nav-link flex items-center justify-center p-1 rounded' to={'/jobs'}>
            <FaBusinessTime className='mr-1' />
            Jobs
          </NavLink>
          <NavLink className='nav-link flex items-center justify-center p-1 rounded' to={'/company'}>
            <BiSolidBusiness className='mr-1' />
            Companies
          </NavLink>
          <div className='nav-link flex items-center justify-center p-1 bg-red-800  rounded text-white'>
            <AiOutlineLogin className='mr-1' />
            {succes || user || company ? (
              <Link to={'/login'} onClick={deleteLocal}>
                Log Out
              </Link>
            ) : (
              <Link to={'/login'}>Login</Link>
            )}
          </div>
          <div className='nav-link relative flex items-center p-2 bg-green-600 text-white cursor-pointer  gap-3 h-8 rounded' onClick={goProfile} >
            <Account className='inline m-0' />
            <h1>{user ? user.name : company.name}</h1>
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
        <div className='nav-link relative flex items-center p-2 bg-green-600 text-white cursor-pointer  gap-3 h-8 rounded' onClick={goProfile} >
          <Account className='inline m-0' />
          <h1 className='text-xs'>{user ? user.name : company.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
