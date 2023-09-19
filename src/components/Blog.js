import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { deleteBlog, likeBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import CommentsList from './CommentsList'

const Blog = ({ blog }) => {
  const currentUser = useSelector(({ user }) => user.currentUser)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBlogLike = () => {
    dispatch(likeBlog(blog))

    dispatch(setNotification(`You liked '${blog.title}'`, 10, 'GOOD'))
  }

  const handleBlogRemove = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      dispatch(deleteBlog(blog.id))

      dispatch(setNotification(`You deleted '${blog.title}`, 10, 'BAD'))

      navigate('/')
    }
  }

  if (!blog) {
    return null
  }

  return (
    <div>
      <h2 className='text-xl text-emerald-600'>
        {blog.title} - {blog.author}
      </h2>
      <br />

      <div className='mb-2'>
        <a href={blog.url}>Url: <span className='underline text-emerald-700'>{blog.url}</span></a>
      </div>

      <div className='mb-2'>
        <span>
          Likes: <span className='font-bold'>{blog.likes}</span>
        </span>
        <button
          className='ms-4 px-2 rounded-md shadow-md text-white bg-emerald-500'
          onClick={handleBlogLike}>
          like
        </button>
      </div>


      <p>Added by: <span className='capitalize font-bold'>{blog.user.name}</span></p>
      <br />

      {currentUser.username === blog.user.username &&
        <button
          className='px-4 py-2 border-solid border-2 border-red-300 rounded-lg text-red-700'
          onClick={handleBlogRemove}>Remove</button>
      }

      <hr className='mb-4 mt-2' />
      <CommentsList blog={blog} />
    </div>
  )
}

export default Blog