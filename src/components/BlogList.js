import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const BlogList = () => {
  const navigate = useNavigate()

  const blogs = useSelector(({ blogs }) =>
    [...blogs]
      .sort((a, b) => b.likes - a.likes)
  )
  //const currentUser = useSelector(({ user }) => user.currentUser)

  return (
    <ul className='mt-4'>
      {blogs.map(blog =>
        <li
          key={blog.id}
          onClick={() => navigate(`/blogs/${blog.id}`)}
          className='flex gap-4 p-2 items-center hover:bg-emerald-50 text-gray-700 cursor-pointer' >
          <FiberManualRecordIcon />
          <span>{blog.title}</span>
        </li>
      )}
    </ul>
  )
}

// OLD STYLE
{/* <div>
  {blogs.map(blog =>
    <div className='blog' style={blogStyle} key={blog.id}>
      <Link to={`/blogs/${blog.id}`}> {blog.title}</Link>
    </div>
  )}
</div> */}

export default BlogList