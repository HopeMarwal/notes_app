import React from 'react'
import NoteCard from './NoteCard'
import AddNote from './AddNote'

export default function NotesList({ notes, handleSaveClick, handleDelete }) {
  return (
    <div className='notes-list'>
      {
        notes.map((item) => {
          return (
            <NoteCard
              note={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          )
        })
      }
      <AddNote handleSaveClick={handleSaveClick} />
    </div>
  )
}
