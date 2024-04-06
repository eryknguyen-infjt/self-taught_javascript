import React from 'react'

export default function TodoList() {
  let todoArrangement = [
    'Let\'s go to the summer camp',
    'Violin - Music Theories',
    'Software Developing - Freecodecamp'
  ];
  return (
    <ul className='main'>
      {todoArrangement.map((todo, todoIndex) => (
        <li className='todoItem' key={todoIndex}>{todo}
          <i class="fa-solid fa-pen-to-square"></i>
        </li>
      ))}
    </ul>
  )
}
