import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

// import {
//   Button
// } from '@mui/material'

const Togglable = forwardRef(({ buttonLabel, children }, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button
          onClick={toggleVisibility}
          className='px-4 py-2 border-solid border-2 border-emerald-500 rounded-lg text-emerald-900 active:border-emerald-600'>{buttonLabel}</button>
        {/* <button onClick={toggleVisibility}>{buttonLabel}</button> */}
      </div>
      <div style={showWhenVisible}>
        {children}
        <button
          onClick={toggleVisibility}
          className='px-4 py-2 border-solid border-2 border-gray-300 rounded-lg text-gray-700 active:border-gray-400'>Cancel</button>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable