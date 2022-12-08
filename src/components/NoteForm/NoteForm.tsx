import React from 'react'
import { Button } from '../NoteButton/Button'
import './NoteForm.scss'
import { Note } from '../../types'

interface NoteFormProps {
    noteContent: Omit<Note, 'checked' | 'id'>;
    changeNote: ({name, description}: Omit<Note,'id'>) => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({noteContent: noteContent, changeNote: changeNote, }) => {
    const [note,setNote] = React.useState(noteContent) 
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setNote({...note, [name]: value, })
    }

    const saveNote = () => {
        const noteItem = {name: note.name, description: note.description}
        changeNote(noteItem)
        setNote({
            name:'',
            description:'',
        })
    }

  return (
    <div className='note_form_container'>
        <div className='fields_container'>
            <div className='field_container'>
                <label htmlFor='name'>
                    <div>name</div>
                    <input type="text" id="name" value={note.name} name="name" onChange={onChange}/>
                </label>
            </div>
            <div className='field_container'>
                <label htmlFor='description'>
                    <div>description</div>
                    <input type="text" id="description" value={note.description} name="description" onChange={onChange}/>
                </label>
            </div>
            <div className='button_container'>
                <Button type="button" onClick={saveNote}>COMPLETE</Button>  
            </div>
        </div>
    </div>
  )
}