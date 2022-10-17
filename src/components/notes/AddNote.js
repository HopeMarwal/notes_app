import React, { useState } from 'react'

export default function AddNote({ handleSaveClick }) {
  const [note, setNote] = useState('')
  const characterLimit = 200;

  const handleChange = (e) => {
    let target = e.target.value
    if (characterLimit - target.length >= 0) {
      setNote(target)
    }
  }

  const handleClick = () => {
    if (note.trim().length > 0) {
      handleSaveClick(note)
    }
    setNote('')
  }

  return (
    <div className='note-card'>
      <div className='note-card_container new'>
        <textarea
          rows='8'
          cols='12'
          placeholder='Type to add a note...'
          value={note}
          onChange={handleChange}
        ></textarea>

        <div className='note-card_footer'>
          <small>{characterLimit - note.length} Remaining</small>
          <button onClick={handleClick} className='save_btn'>Save</button>
        </div>

      </div>

    </div>
  )
}
