import React from 'react';

const CartContext = React.createContext (
    {
        items : [],
        amount : 0,
        addNewItem (item) {},
        deleteItem (id) {},
        clearCart () {}
    }
);

export default CartContext;