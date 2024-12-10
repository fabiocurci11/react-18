import React, { useState } from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';

const TodoContainer = () => {
    //added item from child
    const [dataFromChild, setDataFromChild] = useState(""); // Stato per ricevere il valore dal figlio

    // Stato per l'array dinamico
    const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

    //chiamata dal figlio
    const handleDataFromChild = (data) => {
        console.log("data parent: "+data)
        setDataFromChild(data); // Aggiorna lo stato con i dati ricevuti
        setItems([...items, data]); // Aggiorna l'array aggiungendo il nuovo elemento
        console.log("arr: "+items)

    };

    const setArrOfItems = (event, index) => {
        console.log("setArrOfItems: "+event.target.value + " - "+index)
        const updatedItems = [...items];
        console.log("to edit: "+updatedItems[index])
        updatedItems[index] = event.target.value; // Aggiorna l'elemento specifico
        setItems(updatedItems); 
    }

    //chiamata dal figlio
    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index); // Rimuove l'elemento all'indice specificato
        setItems(updatedItems); // Aggiorna lo stato con la lista aggiornata 
    }



    return (
        <>
            <h2>todo container</h2>

            {/* Passa la funzione al figlio */}
            <AddItem sendDataToParent={handleDataFromChild}></AddItem>

            <TodoList 
                arrOfItems={items}
                deleteItemParent={deleteItem} 
                updateArrOfParent={setArrOfItems}>
            </TodoList>
        </>
    );
};

export default TodoContainer;