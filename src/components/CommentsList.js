import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { commentBlog } from '../reducers/blogReducer'

import NewCommentForm from './NewCommentForm'
import Togglable from './Togglable'

import commentService from '../services/comments'
import { setNotification } from '../reducers/notificationReducer'

const CommentsList = ({ blog }) => {
  const commentFormRef = useRef()
  const dispatch = useDispatch()

  const addComment = async (commentObject) => {
    commentFormRef.current.toggleVisibility()
    try {
      const response = await commentService.create(commentObject)
      const commentedBlog = { ...blog, comments: blog.comments.concat(response) }

      dispatch(commentBlog(commentedBlog))
    } catch (exception) {
      setNotification('A problem occured during operation', 5, 'BAD')
    }
  }

  return (
    <div>
      <Togglable buttonLabel='Add comment' ref={commentFormRef}>
        <NewCommentForm blog={blog} createComment={addComment} />
      </Togglable>

      <h2 className='mt-4 text-lg'>Commentaries</h2>
      <hr />
      <ul className='mt-4'>
        {blog.comments.map(comment =>
          <li
            key={comment._id}
            className='flex gap-4 px-4 py-2 mb-2 max-w-sm  items-center rounded-xl bg-slate-200 text-gray-700'>
            <span>{comment.content}</span>
          </li>
        )}
        {/* <Divider /> */}
      </ul>
    </div>
  )
}

export default CommentsList