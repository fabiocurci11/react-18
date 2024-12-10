import React, { useState } from 'react';

const InputSearch = ({searchedInput}) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const input = event.target.value
    console.log("search: " + input)
    setSearchTerm(input)
    
    //callback to pass data to parent
    searchedInput(input)
  };

  return (
    <div id="input-search">
      <input
        type="text"
        placeholder="Cerca..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default InputSearch;