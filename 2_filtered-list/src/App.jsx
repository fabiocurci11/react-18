import { useState, useEffect } from 'react'
import './App.css'
import InputSearch from './components/InputSearch'
import ItemList from './components/ItemList'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const items = ['Mela', 'Banana', 'Arancia', 'Uva', 'Uova'];

  const handleInputSearch = (input) =>{
    console.log("input: " + input)
    setSearchTerm(input)
  }

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Filtered list</h1>

      <InputSearch searchedInput={handleInputSearch}></InputSearch>
      <ItemList items={filteredItems}></ItemList>
     
    </>
  )
}

export default App
