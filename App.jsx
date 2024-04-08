import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

// JScript goes inside the curly braces in jsx
function App() {
  let todoArrangement = [
    'Let us go to the summer camp',
    'Violin - Music Theories',
    'Software Developing - Freecodecamp'
  ];
  return (
    <main>
      <TodoInput/>
      <TodoList todoArrangement={todoArrangement}/>
    </main>
  )
}

export default App
