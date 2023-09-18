import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

import {
  TextField,
  // Button
} from '@mui/material'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(login({ username, password }))

    setUsername('')
    setPassword('')
    dispatch(setNotification('successfully logged in', 10, 'GOOD'))
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='flex flex-col gap-5 w-full h-screen items-center justify-center' >

      <form className='flex flex-col items-center gap-5 w-80 p-8 border-2 rounded-lg shadow-lg' onSubmit={handleLogin}>
        <h1 className='text-2xl'>Log in <span className='text-xs'>user / user</span></h1>

        <TextField
          className='w-full'
          label='username'
          type="text"
          value={username}
          name="username"
          onChange={handleUsernameChange}
        />
        <TextField
          className='w-full'
          label='password'
          type="password"
          value={password}
          name="password"
          onChange={handlePasswordChange}
        />
        <button
          className='w-1/2 px-4 py-2 font-bold rounded-md shadow-md text-white bg-emerald-500'
          // variant='contained'
          // color='primary'
          id='login-button'
          type="submit">
          LOGIN
        </button>
      </form>

    </div >
  )
}

export default LoginForm