import React from 'react'
import './NoteFilter.scss'

interface NoteFilterProps {
    setFilterText: (str: string) => void
}

export const NoteFilter: React.FC<NoteFilterProps> = ({setFilterText}) => {

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            setFilterText(e.target.value) 
    }

  return (
    <div className='filter_container'>
            <label htmlFor='filter'>
            <div>Filter</div>
            <input type="text" id="filter" onChange={onChange}/>
        </label>
    </div>
  )
}

