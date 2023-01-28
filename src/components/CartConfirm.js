import React, {useContext, useState} from 'react';
import CartContext from '../cart-context';
import classes from './CartConfirm.module.css';

import OrderConfirm from './OrderConfirm';

const CartConfirm = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const cartCtx = useContext(CartContext);

    const increementHandler = (item) => {
        cartCtx.addNewItem({...item, quantity:1});
    }

    const decreementHandler = (id) => {
        cartCtx.deleteItem(id);
    }

    const onPlaceOrderHandler = (e) => {
        e.preventDefault();
        console.log("Confirm your Address...");
        // cartCtx.clearCart();
        setOrderConfirmed(true);
    }
    const onCloseHandler = (e) => {
        e.preventDefault();
        console.log('Close modal');
        props.closeModal();
    }
    const onOrderConfirmHandler = async (userData) => {
        // e.preventDefault();

        try {


            setIsLoading(true);
            const postData = await (fetch ('https://react-http-134bb-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                body: JSON.stringify({
                    orderItems : cartCtx.items,
                    userDetails : userData
                }),
                headers: {
                    'content' : 'application/JSON',
                }
            }))
            if(!postData) {
                console.log('No Response');
                throw new Error('No Response from the server');
            }
            console.log(postData);
            if(postData.ok && postData.status === 200) {
                setIsLoading(false);
                setOrderPlaced(true);
                cartCtx.clearCart();
            }
            else if(postData) {
                throw new Error(postData.status);
            }
            else {
                throw new Error('No Response');
            }
        }catch (err) {
            console.error(err);
            console.log(err.message);
            setError(err);
        }finally{
            setIsLoading(false);
        }
    }
    console.log(error);

    if (!orderPlaced && error ){
        return (
            <React.Fragment>
                <span>Error</span><br></br>
                <span>{error.message}</span>
            </React.Fragment>
        );
    }
    else if (isLoading && !error){
        return (
            <React.Fragment>
                <span>Loading....</span>
            </React.Fragment>
        );
    }
    else if(!orderPlaced && !orderConfirmed && cartCtx.items.length === 0){
        return (
            <React.Fragment>
                <div>
                    <p>You don't have any items in your cart!</p>
                </div>
                <div>
                    <button onClick={onCloseHandler}>
                                    Close
                    </button>
                </div>
            </React.Fragment>
        );
    }
    else if (!orderPlaced && orderConfirmed){
        return (
            <React.Fragment>
                <OrderConfirm confirmOrder={onOrderConfirmHandler} closeModal={props.closeModal}></OrderConfirm>             
            </React.Fragment>
        );
    } 
    else if(orderPlaced && !error) {
        return (
            <React.Fragment>
                <span>Your Order has been placed!</span>
                <span>Thanks!!</span>
                <button onClick={onCloseHandler}>
                                Close
                </button>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>            
                <div className={classes["unordered-list"]}>            
                    <ul>
                        {cartCtx.items.map((el) => {
                            return(
                            <li className={classes["list-item"]} key={el.mealId}>
                                <div className={classes["meal-name"]}>
                                    <span>{el.mealName}  </span>
                                </div>
                                <div>
                                    <span>₹{el.quantity*el.price}</span>
                                </div>
                                <div>
                                    <span>X{el.quantity}</span>
                                </div>
                                <div>
                                    <button onClick={increementHandler.bind(null, el)}>+</button>
                                    <button onClick={decreementHandler.bind(null, el.mealId)}>-</button>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                    <span>Total Amount: </span>
                    <span>{cartCtx.amount}</span>
                </div>
                <div>
                        <button onClick={onPlaceOrderHandler}>
                            Order
                        </button>
                        <button onClick={onCloseHandler}>
                            Close
                        </button>
                </div>
            </React.Fragment>
        )
    }
}

export default CartConfirm;