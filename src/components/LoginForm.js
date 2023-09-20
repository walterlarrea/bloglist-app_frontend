import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'
import { Tooltip } from '@mui/material'
import { setNotification } from '../reducers/notificationReducer'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import RegisterForm from './RegisterForm'

const LoginForm = () => {
  const [isNewUser, setIsNewUser] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(setNotification('Checking...', 100, 'INFO'))

    dispatch(login({ username, password }))
      .catch((err) => {
        console.error(err)
        const errorDetail = err?.response?.data?.error || 'Unexpected error, try later'

        dispatch(setNotification(String(errorDetail), 10, 'BAD'))
      })

    setUsername('')
    setPassword('')
  }

  const handleRegistration = (isNew) => {
    setIsNewUser(isNew)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='flex flex-col gap-5 w-full h-screen items-center justify-center' >
      {isNewUser ?
        <RegisterForm handleRegistrationSuccess={handleRegistration} />
        :
        <form className='flex flex-col items-center gap-5 w-80 p-8 border-2 rounded-lg shadow-lg' onSubmit={handleLogin}>
          <h1 className='text-2xl'>
            Log in <Tooltip title='For a quick test, try username "user" and password "user"' placement='right'>
              <HelpOutlineIcon style={{ fontSize: '1rem' }} />
            </Tooltip>
          </h1>

          <input
            className='w-full p-2 border-solid border-2 border-emerald-400 focus:border-emerald-600 rounded-lg'
            placeholder='username'
            type="text"
            value={username}
            name="username"
            onChange={handleUsernameChange}
            required
          />
          <input
            className='w-full p-2 border-solid border-2 border-emerald-400 focus:border-emerald-600 rounded-lg'
            placeholder='password'
            type="password"
            value={password}
            name="password"
            onChange={handlePasswordChange}
            required
          />
          <button
            className='w-1/2 px-4 py-2 font-bold rounded-md shadow-md text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700'
            // variant='contained'
            // color='primary'
            id='login-button'
            type="submit">
            LOGIN
          </button>

          <button
            type='button'
            className='opacity-90 hover:underline'
            onClick={() => setIsNewUser(true)}>
            Register
          </button>
        </form>

      }
    </div >
  )
}

export default LoginForm