import React from "react"
import './App.scss'
import { Header } from './components/Header/Header'
import { NoteFilter } from "./components/NoteFilter/NoteFilter"
import { NoteList } from "./components/NoteList/NoteList"
import { NoteForm } from './components/NoteForm/NoteForm'
import {Note} from './types'

export const App = () => {
  const [notes, setNotes] = React.useState<Note[]>([])
  const [filterText, setFilterText] = React.useState<string | undefined>()

  const addNote = ({name, description}: Omit<Note, 'id'>) => {
    notes.length 
      ? (setNotes([...notes, {id:notes[notes.length - 1].id + 1, description, name}]))
      : (setNotes([{id:1, description, name}]))
  }

  const deleteNote = (id: Note['id']) => {
    setNotes(notes.filter((note)=> note.id !== id))
  }

  const changeNote = ({name, description, id}: Note) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return {...note, name, description}
        }
        return note
      })
    )
  }

  const notesToRender = filterText 
    ? notes.filter((note) => note.description.includes(filterText))
    : notes

  return (
    <div className="App">
        <div className='styles_1'>
          <Header noteCount={notes.length}/>
          <NoteForm noteContent={{name:' ', description:' '}} changeNote={addNote}/>
          <NoteFilter setFilterText={setFilterText}/>
          <NoteList 
            notes={notesToRender} 
            deleteNote={deleteNote} 
            changeNote={changeNote}
          />
        </div>
    </div>
  )
}

export default App
