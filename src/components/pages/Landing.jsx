import { useState } from 'react'
import Login from '../views/Login'
import Register from '../views/Register'

export default function Landing(){

  const [form, setForm] = useState('register')

  return (
    <main className='landing-page'>
      {form === 'register' ? 
        <>
          <Register />
          <p className='form-switch text-center'>
            Already have an account?&nbsp;
            <span className='link' onClick={() => setForm('login')}>Log in</span>
          </p>
        </>
        :
        <>
          <Login />
          <p className='form-switch text-center'>
            Don&apos;t have an account yet?&nbsp;
            <span className='link' onClick={() => setForm('register')}>Create an account</span></p>
        </>
      }
    </main>
  )
}