import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { commentBlog } from '../reducers/blogReducer'

import NewCommentForm from './NewCommentForm'
import Togglable from './Togglable'

import commentService from '../services/comments'
import { setNotification } from '../reducers/notificationReducer'

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  // Divider
} from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

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

      <h3 className='mt-4 text-lg'>Commentaries</h3>
      <hr />
      <List>
        {blog.comments.map(comment =>
          <ListItem key={comment.id}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText>{comment.content}</ListItemText>
          </ListItem>
        )}
        {/* <Divider /> */}
      </List>
    </div>
  )
}

export default CommentsList