import { useState } from 'react'

const NewBlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }
  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()

    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    })

    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <div>
      <h2 className='py-2 text-emerald-900'>Create a new blog</h2>
      <form className='submitForm flex gap-5 justify-start mb-2' onSubmit={addBlog}>
        <div>
          <input
            className='w-full p-2 border-solid border-2 border-emerald-400 focus:border-emerald-600 rounded-lg'
            placeholder='title'
            type='text'
            value={newTitle}
            name='title'
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <input
            className='w-full p-2 border-solid border-2 border-emerald-400 focus:border-emerald-600 rounded-lg'
            placeholder='author'
            type='text'
            value={newAuthor}
            name='author'
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <input
            className='w-full p-2 border-solid border-2 border-emerald-400 focus:border-emerald-600 rounded-lg'
            placeholder='url'
            type='text'
            value={newUrl}
            name='url'
            onChange={handleUrlChange}
          />
        </div>
        <button
          className='px-4 py-2 border-solid border-2 font-bold border-emerald-500 rounded-lg text-emerald-900 active:border-emerald-600'
          type='submit'>Create</button>
      </form>
    </div >
  )
}

export default NewBlogForm