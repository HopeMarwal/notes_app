import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { MdSearch } from 'react-icons/md'
import '../assets/scss/notes.scss'
//import components
import NotesList from './notes/NotesList'
import SearchInput from './notes/SearchInput'
import NotesHeader from './notes/NotesHeader'

export default function Notes() {
  //state
  const [notes, setNotes] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  //hooks
  useEffect(() => {
    getLocalNotes()
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes',
      JSON.stringify(notes)
    );
  }, [notes])

  //save local starage function
  const getLocalNotes = () => {
    if (localStorage.getItem('react-notes') === null) {
      localStorage.setItem('react-notes', JSON.stringify([]))
    } else {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes'));
      if (savedNotes) { setNotes(savedNotes) }
    }
  }

  //event handler functions
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleMode = () => {
    let newMode = !darkMode
    setDarkMode(newMode)
  }

  const handleSaveClick = (note) => {
    const date = new Date()
    let newNote = {
      id: nanoid(),
      text: note,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className='notes'>

        <NotesHeader handleToggle={handleMode} />

        <div className='search'>
          <MdSearch className='search-icon' size='1.3em' />
          <SearchInput query={searchInput} onChange={handleChange} />
        </div>

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchInput)
          )}
          handleSaveClick={handleSaveClick}
          handleDelete={handleDelete}
        />

      </div>
    </div>

  )
}
