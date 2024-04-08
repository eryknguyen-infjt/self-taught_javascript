import React from 'react'
export default function TodoCard(props) {
  const { todo } = props; // Assuming the content is passed as a prop named "todo"
  return (
    <li className='todoItem'>
      {todo}
      <div className='actionsContainer'>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </li>
  )
}
