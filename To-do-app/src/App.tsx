import { useState } from 'react'

import './App.css'
import AddToDo from './components/AddToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> ToDo React + TypeScript</h1>
      <AddToDo/>
    </>
  )
}

export default App
