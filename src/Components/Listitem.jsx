import React, { useState } from 'react'

const Listitem = ({todo, deletetodo, edittodo}) => {





  return (
    <li className="list-group-item  d-flex justify-content-between align-items-center rounded-0">
        <h1 className="display-6">{todo.text}</h1>
        {/* <p className='display-04'> id = {todo.id}</p> */}
        <span className="float-end">
          <button className="btn-warning btn btn-sm mx-1" onClick={()=> edittodo(todo)}>Edit </button>
          <button className="btn-danger btn btn-sm" onClick={()=>deletetodo(todo.id)}>Delete </button>
        </span>
      </li>
  )
}

export default Listitem