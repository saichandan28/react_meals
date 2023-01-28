import classes from './Meal.module.css';
import CartContext from '../cart-context';

import { useRef, useState, useContext } from 'react';
const Meal = (props) => {
    const [quantity, setQuantity] = useState (0)
    const cartCtx = useContext(CartContext);
    const refQuantity = useRef(0);

    const quantityValue = refQuantity.current.value;
    
    const onClickHandler = (e) => {
        e.preventDefault();
        if(quantity>0) {
                cartCtx.addNewItem({
                    mealId: props.mealId, 
                    mealName: props.mealName, 
                    price: props.price, 
                    quantity: +quantity}); 
                refQuantity.current.value=0;
            }

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted!!")
    }

    const onChangeHandler = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className={classes["meals"]}>
            <div>
                <span>{props.mealName}</span><br/>
                <span>{props.description}</span><br/>
                <span>₹ {props.price}</span>
            </div>            
            <form className={classes["input-form"]} onSubmit={onSubmitHandler}>
                {/* <div> */}
                    <label for={props.mealName}>Quantity</label>
                    <input className={classes["form-quantity"]} type="number" name={props.mealName} min="0" max="10" step="1" value={quantity} onChange={onChangeHandler} />
                {/* </div> */}
                    <input className={classes["form-button"]} type="submit" value="Add" onClick={onClickHandler}/>
                    
            </form>
        </div>
    );

}

export default Meal;