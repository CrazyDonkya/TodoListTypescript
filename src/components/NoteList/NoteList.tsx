import React from 'react'
import {Note} from '../../types'
import { NoteForm } from '../NoteForm/NoteForm'
import { NoteItem } from './NoteItem/NoteItem'

interface NoteListProps {
    notes: Note[]
    deleteNote:(id: Note['id']) => void
    changeNote:({name, description, id}: Note) => void
}

export const NoteList: React.FC<NoteListProps> = ({notes: notes, deleteNote: deleteNote, changeNote: changeNote}) => (
    <div>
        {notes.map((note) => {
            return(
                <NoteItem 
                    key={note.id} 
                    note={note} 
                    deleteNote={deleteNote}
                    changeNote={changeNote}
                />
            )
        }
        )}
    </div>
)