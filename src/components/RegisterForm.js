import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

const RegisterForm = ({ handleRegistrationSuccess }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleRegister = (event) => {
    event.preventDefault()
    dispatch(setNotification('Checking...', 10, 'INFO'))

    dispatch(register({ name, username, password }))
      .then(() => {
        dispatch(setNotification('User registered successfully', 10, 'GOOD'))
        handleRegistrationSuccess(true)
      })
      .catch((err) => {
        console.error(err)
        const errorDetail = err?.response?.data?.error || 'Unexpected error, try later'

        dispatch(setNotification(String(errorDetail), 10, 'BAD'))
      })

    setName('')
    setUsername('')
    setPassword('')
  }

  const handleCancelRegister = () => {
    handleRegistrationSuccess(false)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='flex flex-col gap-5 w-full h-screen items-center justify-center' >

      <form className='flex flex-col items-center gap-5 w-80 p-8 border-2 rounded-lg shadow-lg' onSubmit={handleRegister}>
        <h1 className='text-2xl'>
          Register
        </h1>

        <input
          className='w-full p-2 border-solid border-2 border-emerald-400 focus:border-emerald-600 rounded-lg'
          placeholder='name'
          type="text"
          value={name}
          name="name"
          onChange={handleNameChange}
          required
        />
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
          id='register-button'
          type="submit">
          REGISTER
        </button>

        <button
          type='button'
          className='opacity-90 hover:underline'
          onClick={handleCancelRegister}>
          Cancel
        </button>
      </form>


    </div >
  )
}

export default RegisterForm