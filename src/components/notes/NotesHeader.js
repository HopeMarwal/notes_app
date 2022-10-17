import React from 'react'

export default function NotesHeader(props) {
  return (
    <div className='notes-header'>

      <h2>Notes</h2>

      <button
        onClick={props.handleToggle}
        className='save_btn'
      >
        Toggle Mode
      </button>

    </div>
  )
}
