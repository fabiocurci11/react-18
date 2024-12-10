import React, { useState } from 'react';

const ItemList = ({items}) => {

    return (
        <div id="item-list">
            {items.length === 0 
                ? 
                <p>Nessun item trovato</p>
                : 
                items.map((item, index) => (
                    <p key={index}>{item}</p> 
                ))
            }
        </div>
    );
};

export default ItemList;