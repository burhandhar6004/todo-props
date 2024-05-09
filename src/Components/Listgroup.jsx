import React from 'react'
import Listitem from './Listitem'

const Listgroup = ({todos, deletetodo, edittodo, updateTodo,edit}) => {
  return (
    <ul className="list-group">
      {
        todos.map(todo => <Listitem  key={todo.id} todo={todo} deletetodo={deletetodo} edittodo={edittodo} updateTodo={updateTodo} edit={edit} />)
      }

      </ul>
  )
}

export default Listgroup