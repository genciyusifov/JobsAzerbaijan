import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import { BiSolidBusiness } from 'react-icons/bi';
import Account from '../Header/Account'
import "./Header.css"

function Header() {
  const user = JSON.parse(localStorage.getItem("user")) 
  const [state , setState] = useState(false)
  const salamver = ()=> {
    setState(!state)
  }
  const deleteLocal = ()=> {
    localStorage.removeItem("user")
  }
  return (
    <div className='bg-slate-100 flex items-center justify-between  p-2 border-b-2 md:px-44 '>
      <div>
        <img
          className='w-[50px]'
          src='https://images.squarespace-cdn.com/content/v1/5941dba2b3db2bab435fa5a7/c47baec4-8fde-4e41-a2f8-7bb6fe0ac913/hiring+icon.png'
          alt='logo'
        />
      </div>
      <ul className='flex gap-5'>
        <NavLink className='p-2 border border-violet-800 rounded flex items-center duration-700 ' to={'/'}>
          <AiOutlineHome className='mr-1' />
          <div>
            Home
          </div>
        </NavLink>
        <NavLink className='p-2 border border-violet-800 rounded flex items-center duration-700' to={'/jobs'}>
          <BiSolidBusiness className='mr-1' />
          <div >
            Jobs
          </div>
        </NavLink>
        <li className='p-2 border border-violet-800 rounded text-gray-900 bg-sky-100 font-bold flex items-center'>
          <AiOutlineLogin className='mr-1' />
        {
          user ?  <Link to={'/login'} onClick={deleteLocal} > Log Out </Link> : <Link to={'/login'}> Login </Link>
        }  
        </li>
        <li className='w-[35px] h-[35px] rounded-full pt-2 pl-[9px] text-white  bg-slate-600 items-center justify-center relative ' onClick={salamver}  >
          <Account/>
          {state && user ? <div className='bg-black p-4 md:p-5 w-44 rounded  md:mt-0  top-[36px]   md:absolute md:z-40 '>
              <div className='text-white '>
                Name: {user.name} <br />
                Surname: {user.surname}
              </div>
            </div> : null}
        </li>
      </ul>
    </div>
  );
}

export default Header;
