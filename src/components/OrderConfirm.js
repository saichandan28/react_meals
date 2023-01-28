import classes from './OrderConfirm.module.css';
import React, {useState, useContext, useRef} from 'react';
import CartContext from '../cart-context';

const OrderConfirm = (props) => {

    const [isValid, setIsValid] = useState({
        isNameValid: true,
        isStreetValid: true,
        isCityValid: true,
        isPinValid: true,
    });

    // const [isValid, setIsValid] = useState(false);

    const refName = useRef('');
    const refStreet = useRef('');
    const refLocality = useRef('');
    const refCity = useRef('');
    const refPIN = useRef('');

    const [orderPlaced, setOrderPlaced] = useState(false);
    // const cartCtx = useContext(CartContext);

    const onCancelHandler = (e) => {
        e.preventDefault();
        props.closeModal();
        setOrderPlaced(false);
    }
    const onConfirmHandler = (e) => {
        e.preventDefault();
        const valName = refName.current.value;
        const valStreet = refStreet.current.value;
        const valLocality = refLocality.current.value;
        const valCity = refCity.current.value;
        const valPIN = refPIN.current.value;
        console.log(valName, valStreet, valCity, valPIN);

        if (!valName || !valStreet || !valCity || !valPIN){
            setIsValid({
                isNameValid: valName,
                isStreetValid: valStreet,
                isCityValid: valCity,
                isPinValid: valPIN,
            });
            return;
        }

        if(valName && valStreet && valCity && valPIN) {
            console.log("Order Placed...");

            props.confirmOrder({
                userName: valName,
                street : valStreet,
                locality : valLocality,
                city : valCity,
                pin : valPIN,
            });
            // cartCtx.clearCart();

            // setOrderPlaced(true);
        }

    }

    let jsx;
    if (!orderPlaced){
        jsx = (
        <div>
            <span>Please provide address details!</span>
            
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" ref={refName}></input>
                    {!isValid.isNameValid && <span>Enter a valid Name</span>}
                </div>
                <div>
                    <label htmlFor="street" >Street</label>
                    <input id="street" ref={refStreet}></input>
                    {!isValid.isStreetValid && <span>Enter a valid Street</span>}
                </div>
                <div>
                    <label htmlFor="locality">Locality</label>
                    <input id="locality" ref={refLocality}></input>
                </div>
                <div>
                    <label htmlFor="city" >City</label>
                    <input id="city" ref={refCity}></input>
                    {!isValid.isCityValid && <span>Enter a valid City</span>}

                </div>
                <div>
                    <label htmlFor="pin-code" >Pin Code</label>
                    <input id="pin-code" ref={refPIN}></input>
                    {!isValid.isPinValid && <span>Enter a valid PIN</span>}

                </div>
                <div>
                    <button onClick={onConfirmHandler}>Confirm</button>
                    <button onClick={onCancelHandler}>Cancel</button>
                </div>
            </form>
        </div>);
    }
    else if (orderPlaced){
        jsx = (
        <div>
            <span>Order Placed!</span>   
            <button onClick={onCancelHandler}>Close</button>         
        </div>);
    }
    return (
        <React.Fragment>
            {jsx}
        </React.Fragment>
    );
}

export default OrderConfirm;