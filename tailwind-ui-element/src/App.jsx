import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx';
import Input from './components/Input.jsx';

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    console.log("click")
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600">Ciao, React con Tailwind!</h1>
        <Input type="text" label="Title" />
        <Button onClick={handleClick}>Button</Button>

      </div>
    </>
  )
}

export default App
