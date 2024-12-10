import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoContainer from './components/TodoContainer'


function App() {
  

  return (
    <>
      <h1>TODO app</h1>
      <div id="todo-container">
        <TodoContainer></TodoContainer>
      </div>

    </>
  )
}

export default App
