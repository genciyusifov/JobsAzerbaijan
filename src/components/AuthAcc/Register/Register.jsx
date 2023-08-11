import React, { useState } from 'react'
import RegisterUser from './RegisterUser'
import RegisterCompany from './RegisterCompany'

function Register() {
    const [state , setState] = useState(true)
  return (
    <>
    <div className='flex gap-2 flex-wrap  my-7'>
        <button className='p-2 bg-blue-700 text-white rounded-md' onClick={()=>setState(true)} >User Register</button>
        <button className='p-2 bg-blue-700 text-white rounded-md' onClick={()=>setState(false)}>Company Register</button>
    </div>
    {state ? <RegisterUser/> : <RegisterCompany/> }

    </>
  )
}

export default Register