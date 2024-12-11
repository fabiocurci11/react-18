import React, { useState } from 'react';

const OrderAction = ({handleOrder}) => {
    
    const asc = "asc";
    const desc = "desc";
    
    const handleClick = (orderType) => {
        console.log("orderType: "+orderType)
        handleOrder(orderType)

    };

    return (
        <div>
            <button onClick={() => handleClick(asc)}>Ordina Crescente</button>
            <button onClick={() => handleClick(desc)}>Ordina Decrescente</button>
        </div>
    );
};

export default OrderAction;