import { useNavigate } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const User = ({ user }) => {
  const navigate = useNavigate()

  if (!user) {
    return null
  }

  return (
    <>
      <h2 className='text-emerald-600 text-4xl capitalize'>{user.name}</h2>
      <hr />
      <p className='mt-2 ms-12 text-gray-600'>Added blogs</p>

      <ul className='mt-4'>
        {user.blogs.map(blog =>
          <li
            key={blog.id}
            onClick={() => navigate(`/blogs/${blog.id}`)}
            className='flex gap-4 p-2 items-center hover:bg-emerald-50 text-gray-700 cursor-pointer' >
            <FiberManualRecordIcon />
            <span>{blog.title}</span>
          </li>
        )}
      </ul>
    </>
  )
}

export default User