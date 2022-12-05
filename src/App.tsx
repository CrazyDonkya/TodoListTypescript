import React from "react"
import './App.scss'
import { Header } from './components/Header/Header'
import { TodoMenu } from './components/TodoMenu/TodoMenu'
import {Todo} from './types'

const TODO_LIST = [
  {id:1, name: 'task1', description: 'biba', checked:true},
  {id:2, name: 'task2', description: 'biba', checked:true},
  {id:3, name: 'task3', description: 'biba', checked:true},
]

export const App = () => {
  const [todos, setTodos] = React.useState(TODO_LIST)

  const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
      setTodos([...todos, {id:todos[todos.length - 1].id + 1, description, name, checked:false}])
  }

  return (
    <div className="App">
        <div className='styles_1'>
          <Header todoCount={todos.length}/>
          <TodoMenu addTodo={addTodo}/>
        </div>
    </div>
  )
}

export default App
