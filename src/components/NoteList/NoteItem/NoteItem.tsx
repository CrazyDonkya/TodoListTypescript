import React from 'react'
import './NoteItem.scss'
import {Note} from '../../../types'
import {Button} from '../../NoteButton/Button'
import { NoteForm } from '../../NoteForm/NoteForm';

interface NoteItemProps{
    note: Note;
    deleteNote:(id: Note['id']) => void
    changeNote: ({name, description, id}: Note) => void
}
const TAG_SYMBOL = '#'

export const NoteItem: React.FC<NoteItemProps> = ({note: note, deleteNote: deleteNote, changeNote: changeNote}) => {
    const [isEdited, setIsEdited] = React.useState(false)

    const onFinishEditing = ({name, description}: Note) => {
        changeNote({name, description, id: note.id});
        setIsEdited(false);
    }
    return (
    <div className='note_item_container'>
        {isEdited
            ? <NoteForm
                key={note.id} 
                noteContent={{name: note.name, description: note.description}}
                changeNote={onFinishEditing}
            />
            : <> 
                <div 
                className='note_item_title'
                >
                    {note.name}
                </div>
                <div className='note_item_description'>
                    {note.description.split(' ').map((word) => {
                        if(word[0] === TAG_SYMBOL) {
                            return <span style={{backgroundColor: "wheat"}}>{`${word} `}</span>
                        }
                        return `${word} `
                    })}
                </div>
            </>
    }
        <div className='note_item_button_container'>
            <Button onClick={() => setIsEdited(true)}>EDIT</Button>
            <Button onClick={() => deleteNote(note.id)}>DELETE</Button>
        </div>
    </div>
  )
}
