import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function login(event, formData){
    console.log("Login")
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <h1>MyApp</h1>
      <div id="content-center">
        <h2>Login form</h2>
        <form onSubmit={login}>
         <div id="input-form">
            <label>
              <p className='p-form'>Nome</p>
              <input name="nome" type="text"/>
            </label>

            <label>
              <p className='p-form'>Cognome</p>
              <input name="cognome" type='password' />
            </label>

            <button type="submit">Login</button>
         
          </div>
        </form>

     
        
      </div>
    </>
  )
}

export default App
