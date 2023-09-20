import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'
import { Tooltip } from '@mui/material'

const Menu = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(({ user }) => user.currentUser)

  const handleLogout = () => {
    dispatch(logout())
    window.location.reload()
  }

  return (
    <header className='flex flex-wrap justify-between py-2 mb-20 after:w-screen after:absolute after:left-0 after:top-0 after:bg-teal-800 after:h-[60px] after:-z-10'>
      <h1 className='py-2 border-emerald-200 text-emerald-100'>Bloglist App</h1>

      <nav className='flex flex-nowrap items-center gap-4'>
        <Link
          className='border-b-2 border-solid px-4 py-0 border-emerald-200 text-emerald-100 hover:py-1 ease-out duration-200'
          to="/">
          Blogs
        </Link>
        <Link
          className='border-b-2 border-solid px-4 border-emerald-200 text-emerald-100 hover:py-1 ease-out duration-200'
          to="/users">
          Users
        </Link>
      </nav>

      <Tooltip title='Logout'>
        <button
          className='border-b-2 h-min self-center border-s-0 border-e-0 border-t-0 border-solid px-2 border-gray-200 text-gray-100 hover:py-1 ease-out duration-200'
          onClick={handleLogout}>
          {currentUser
            ? <span className='capitalize'>{currentUser.name}</span>
            : <Link to="/login">login</Link>
          }
        </button>
      </Tooltip>
    </header>
  )
}

export default Menu