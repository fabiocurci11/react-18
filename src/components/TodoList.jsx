import React, { useState } from 'react';

const TodoList = ({ arrOfItems, updateArrOfParent, deleteItemParent}) => {

  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);  

  const handleEdit = (index) => {
    console.log("edit: "+index)
    setEdit((edit) => !edit)
    setEditIndex(index); // Imposta l'indice dell'elemento da modificare
  }

  const handleChange = (event,index) => {
    updateArrOfParent(event, index)
  };

  const handleSave = () => {
    setEditIndex(null); // Esci dalla modalità di modifica
  };

  const handleDelete = (index) => {
    setEditIndex(null);
    deleteItemParent(index)
  };

  return (
    <>
      <div id="todo-list">
        {arrOfItems.map((item, index) => (
          <>
            <div id='todo-list-item' key={index}>
              { editIndex===index 
                ?  
                <input 
                  type="text" 
                  value={item} 
                  onChange={(event) => handleChange(event,index)}>  
                </input>
                :
                <h2>{item}  {index}</h2> 
              }
             
              <div id="todo-list-action">
              {editIndex === index 
                ? 
                <button onClick={handleSave}>Save</button>
                : 
                <button onClick={() => handleEdit(index)}>Edit</button>
              }
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>

          </>
        ))}
      </div>
    </>
  );
};

export default TodoList;