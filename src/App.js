import { useEffect, useRef } from 'react'
import './index.css'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import NewBlogForm from './components/NewBlogForm'
import NavBar from './components/NavBar'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
import UsersList from './components/UsersList'
import User from './components/User'

import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs, createBlog } from './reducers/blogReducer'
import { initializeUserSession, initializeUserList } from './reducers/userReducer'

import { Container } from '@mui/material'
import {
  Routes,
  Route,
  useMatch,
} from 'react-router-dom'

const App = () => {
  const currentUser = useSelector(({ user }) => user.currentUser)
  const usersList = useSelector(({ user }) => user.usersList)
  const blogList = useSelector(({ blogs }) => blogs)

  useEffect(() => {
    if (currentUser.name) {
      dispatch(setNotification('Successfully logged in', 10, 'GOOD'))
    }
  }, [currentUser.name])

  const fontStyle = {
    fontFamily: 'Roboto'
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUserSession())
    dispatch(initializeUserList())
  }, [dispatch])

  const blogFormRef = useRef()

  const addBlog = newBlogObject => {
    blogFormRef.current.toggleVisibility()
    dispatch(createBlog(newBlogObject))
  }

  const matchUser = useMatch('/users/:id')
  const user = matchUser
    ? usersList.find(user => user.id === matchUser.params.id)
    : null

  const matchBlog = useMatch('/blogs/:id')
  const blog = matchBlog
    ? blogList.find(user => user.id === matchBlog.params.id)
    : null

  return (
    <Container style={fontStyle}>
      {!currentUser.name ?
        <>
          <Notification />
          <LoginForm />
        </> :
        <div>
          <NavBar />
          <div className='absolute top-20 right-1/2 translate-x-1/2'>
            <Notification />
          </div>

          <Routes>
            <Route path="/blogs/:id" element={<Blog blog={blog} />} />

            <Route path="/" element={
              <div>
                <Togglable buttonLabel='New blog' ref={blogFormRef}>
                  <NewBlogForm createBlog={addBlog} />
                </Togglable>
                <BlogList />
              </div>
            } />

            <Route path="/users/:id" element={<User user={user} />} />

            <Route path="/users" element={<UsersList />} />
          </Routes>

          <br />
        </div>
      }
    </Container>
  )
}

export default App
