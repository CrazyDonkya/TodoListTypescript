import React from 'react'
import { Button } from '../TodoButton/Button'
import './TodoMenu.scss'
import { Todo } from '../../types'

const DEFAULT_TODO = {
    name:'',
    description:'',
}

interface TodoMenuProps{
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
}

export const TodoMenu: React.FC<TodoMenuProps> = ({addTodo}) => {

    const [todo,setTodo] = React.useState(DEFAULT_TODO) 
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setTodo({...todo, [name]: value, })
        console.log(value)
    }

    const onClick = () => {
        addTodo({name: todo.name, description: todo.description})
        setTodo(DEFAULT_TODO)
    }

  return (
    <div className='todoMenuContainer'>
        <div className='fields_container'>
            <div className='field_container'>
                <label htmlFor='name'>
                    <div>name</div>
                    <input type="text" id="name" value={todo.name} name="name" onChange={onChange}/>
                </label>
            </div>
            <div className='field_container'>
                <label htmlFor='description'>
                    <div>description</div>
                    <input type="text" id="description" value={todo.description} name="description" onChange={onChange}/>
                </label>
            </div>
            <div className='button_container'>
                <Button type="button" onClick={onClick}>ADD</Button>
            </div>
        </div>
    </div>
  )
}