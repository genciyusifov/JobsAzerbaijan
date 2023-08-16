import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai'; // Import the menu icon
import { FcBusiness } from 'react-icons/fc';
import { BiSolidBusiness } from 'react-icons/bi';
import Account from '../Header/Account';
import './Header.css';

function Header({ succes, setSucces }) {
  const [state, setState] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate()

  const toggleMenu = () => {
    setState(!state);
  };

  const deleteLocal = () => {
      localStorage.removeItem('user');
      setSucces(false);
  };
  const goProfile = () => {
    user ? navigate("/detail") : navigate("/login")
  }

  return (
    <div className='bg-slate-100'>
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
          <NavLink className='nav-link flex items-center justify-center p-2 rounded' to={'/'}>
            <AiOutlineHome className='mr-1' />
            Home
          </NavLink>
          <NavLink className='nav-link flex items-center justify-center p-2 rounded' to={'/jobs'}>
            <FcBusiness className='mr-1' />
            Jobs
          </NavLink>
          <NavLink className='nav-link flex items-center justify-center p-2 rounded' to={'/company'}>
            <BiSolidBusiness className='mr-1' />
            Companies
          </NavLink>
          <div className='nav-link flex items-center justify-center p-2'>
            <AiOutlineLogin className='mr-1' />
            {succes ? (
              <Link to={'/login'} onClick={deleteLocal}>
                Log Out
              </Link>
            ) : (
              <Link to={'/login'}>Login</Link>
            )}
          </div>
          <div className='nav-link relative items-center justify-center pl-2 pt-1 bg-slate-300 w-8 h-8 rounded-full' onClick={goProfile} >
            <Account className='inline m-0' />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {state && (
        <div className='md:hidden duration-700 bg-slate-100'>
          <NavLink className='nav-link-mobile' to={'/'}>
            Home
          </NavLink>
          <NavLink className='nav-link-mobile' to={'/jobs'}>
            Jobs
          </NavLink>
          <NavLink className='nav-link-mobile' to={'/company'}>
            Companies
          </NavLink>
          <div className='nav-link-mobile' onClick={deleteLocal}>
            Log Out
          </div>
          <div className='nav-link relative' >
            <Account className='inline m-0' />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
