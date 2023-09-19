import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'
import {
  Tooltip
} from '@mui/material'

const Menu = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(({ user }) => user.currentUser)

  const handleLogout = () => {
    dispatch(logout())
    window.location.reload()
  }

  return (
    <header className='flex justify-between p-2 mb-20'>
      <h1
        className='border-2 border-solid rounded-full px-4 py-2 border-emerald-500 text-emerald-600'>Bloglist App</h1>

      <nav className='flex flex-nowrap items-end gap-4'>
        <Link
          className='border-b-2 border-solid px-4 border-emerald-500 text-emerald-600 hover:scale-110 hover:py-1 ease-out duration-200'
          to="/">
          Blogs
        </Link>
        <Link
          className='border-b-2 border-solid px-4 border-emerald-500 text-emerald-600 hover:scale-110 hover:py-1 ease-out duration-200'
          to="/users">
          Users
        </Link>
      </nav>

      <Tooltip title='Logout'>
        <button
          className='border-2 border-solid rounded-full px-4 py-2 border-gray-500 text-gray-600 hover:scale-105 ease-out duration-200'
          onClick={handleLogout}>
          {currentUser
            ? <em className='capitalize'>{currentUser.name} logged in</em>
            : <Link to="/login">login</Link>
          }
        </button>
      </Tooltip>
    </header>
  )
}

export default Menu