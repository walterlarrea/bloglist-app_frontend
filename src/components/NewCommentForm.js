import { useState } from 'react'

const NewCommentForm = ({ blog, createComment }) => {
  const [newComment, setNewComment] = useState('')

  const handleCommentChange = (event) => {
    setNewComment(event.target.value)
  }
  const addComment = async (event) => {
    event.preventDefault()

    createComment({
      content: newComment,
      blog: blog.id
    })

    setNewComment('')
  }

  return (
    <div>
      <h2 className='pe-4 py-2 text-emerald-900'>New commentary</h2>
      <form className='submitForm flex gap-5 justify-start mb-2' onSubmit={addComment}>
        <div>
          <input
            className='w-full p-2 border-solid border-2 border-emerald-400 focus:border-emerald-600 rounded-lg'
            placeholder='comment'
            type='text'
            value={newComment}
            name='content'
            onChange={handleCommentChange}
          />
        </div>
        <button
          className='px-4 py-2 border-solid border-2 font-bold border-emerald-500 rounded-lg text-emerald-900'
          type='submit'>COMMENT</button>
      </form>
    </div>
  )
}

export default NewCommentForm