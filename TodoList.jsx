import React from 'react';
import TodoCard from './TodoCard'; // Assuming TodoCard is in a file named TodoCard.js

export default function TodoList(props) {
  const {todoArrangement} = props

  return (
    <ul className='main'>
      {todoArrangement.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} todo={todo} /> // Pass the todo text as a prop
      ))}
    </ul>
  );
}
