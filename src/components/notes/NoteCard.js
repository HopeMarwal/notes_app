import { useState, useEffect } from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default function NoteCard({ note, handleDelete }) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClik = () => {
    setIsVisible(false)
    setTimeout(() => {
      handleDelete(note.id)
    }, 500);
  }

  return (
    <div className={`${isVisible ? 'show' : 'hide'} note-card`}>

      <div className='note-card_container'>

        <span>{note.text}</span>

        <div className='note-card_footer'>
          <small>{note.date}</small>
          <MdDeleteForever onClick={handleClik} className='delete-icon' size='1.3em' />
        </div>

      </div>

    </div>
  )
}
