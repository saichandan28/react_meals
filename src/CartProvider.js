import React, {useReducer} from 'react';
import CartContext from './cart-context';

const nullCart = {
    items : [],
    amount : 0,  
};



const cartReducer = (state, action) => {
    let updatedItems;
    let updatedTotal;
    switch (action.type) {        
        case 'ADD' : {
            updatedItems = [...state.items];
            const itemIndex = state.items.findIndex(element =>element.mealName === action.item.mealName);

            if ( itemIndex < 0) {
                updatedItems.push({
                    mealId:action.item.mealId, 
                    mealName:action.item.mealName, 
                    price: action.item.price, 
                    quantity:action.item.quantity
                });
                updatedTotal = state.amount + action.item.quantity * action.item.price;
            }else{
                updatedItems[itemIndex].quantity += action.item.quantity;
                updatedTotal = state.amount + action.item.quantity * action.item.price;
            }
            return ({
                items: updatedItems,
                amount: updatedTotal
            });
        }
        case 'DELETE' : {
            updatedItems = [...state.items];
            const itemIndex = updatedItems.findIndex(el => el.mealId === action.id)
            if (itemIndex<0) return;
            updatedTotal = state.amount - updatedItems[itemIndex].price;
            if(updatedTotal === 0) return ({ items: [], amount: 0 });

            if (updatedItems[itemIndex]?.quantity === 1){
                updatedItems.splice(itemIndex, 1);
                return ({
                    items: updatedItems,
                    amount: updatedTotal
                })
            } 
            if (updatedItems[itemIndex]?.quantity > 1) {
                updatedItems[itemIndex].quantity-=1;
                return ({
                    items: updatedItems,
                    amount: updatedTotal
                })
            }
            return ({
                items: updatedItems,
                amount: updatedTotal
            })
        }
        case 'CLEARALL' : {
            return {
                items: [],
                amount: 0
            }
        }
        default : {
            return {
                items: [],
                amount: 0
            }
        }
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, nullCart);

    const addNewItemHandler = (item) => {
        dispatchCartAction({type : 'ADD', item: item});
    }
    const deleteItemHandler = (mealId) => {
        dispatchCartAction({type : 'DELETE', id : mealId});
    }
    const clearCartHandler = () => {
        dispatchCartAction({type : 'CLEARALL'});
    }

    const cartContext = {
        items: cartState.items,
        amount: cartState.amount,
        addNewItem: addNewItemHandler,
        deleteItem: deleteItemHandler,
        clearCart: clearCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
        
}

export default CartProvider;