import React, { useState } from 'react';

const AddItem = ({sendDataToParent}) => {

 // Stato per gestire il valore dell'input
 const [inputValue, setInputValue] = useState('');

 // Gestore dell'evento onChange
 const handleChange = (event) => {
    console.log("event: " + event.target.value)
    setInputValue(event.target.value); // Aggiorna lo stato con il valore corrente dell'input
 };

 const handleClick = () => {
    console.log("Click button")
    sendDataToParent(inputValue);
 }

 
  
  return (
    <>
        <input
            type="text"
            value={inputValue} // Collega il valore dell'input allo stato
            onChange={handleChange} // Chiama la funzione quando il valore cambia
        />
        <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddItem;