import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemList from './components/ItemList'
import OrderAction from './components/OrderAction'

function App() {

  const [books, setBooks] = useState([
    { id: 1, title: "Il Signore degli Anelli" },
    { id: 2, title: "1984" },
    { id: 3, title: "Il Piccolo Principe" },
    { id: 4, title: "Orgoglio e Pregiudizio" },
    { id: 5, title: "Il Codice da Vinci" },
    { id: 6, title: "Harry Potter e la Pietra Filosofale" },
    { id: 7, title: "Cento Anni di Solitudine" },
    { id: 8, title: "Il Nome della Rosa" },
    { id: 9, title: "Moby Dick" },
    { id: 10, title: "La Divina Commedia" },
  ]);

  const handleOrderAction = (orderType) =>{

    // Ordina per titolo (alfabeticamente)
    const sortedBooks = [...books].sort((a, b) =>
      orderType === "asc" 
      ?
      a.title.localeCompare(b.title)
      :
      b.title.localeCompare(a.title)
    );
    setBooks(sortedBooks);
  }

  return (

    <>
      <OrderAction handleOrder={handleOrderAction}/>
      <ItemList items={books} />

    </>

  )
}

export default App
