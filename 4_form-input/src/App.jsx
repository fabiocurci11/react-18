import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormControlled from './components/FormControlled'

function App() {
  const [dataForm, setDataForm] = useState({})

  const handleFormData = (data) => {
    console.log(data)
    setDataForm(data)
  }

  

  return (
    <>
      <FormControlled sendFormData={handleFormData} />

      <h3>Il form appena compilato ha i seguenti dati</h3>
      <br />
      {/* Object.entries() è un metodo di JavaScript che prende un oggetto e restituisce un array di coppie chiave/valore. */}
      {Object.entries(dataForm).map(([key, value]) => (
          <p key={key}>
            {value}
          </p>
      ))}
     

    </>
  )
}

export default App
