import classes from './CartButton.module.css';
import Modal from '../Modal';
import CartIcon from './CartIcon';
import CartContext from '../cart-context';
import { useState, useEffect, useContext } from 'react';
import CartConfirm from './CartConfirm';

const CartButton = (props) => {

    const [showModal, setShowModal] = useState(false);
    const cartCtx = useContext(CartContext);
    
    let totalItems = cartCtx.items.reduce((prev, curr) => {
        return prev+curr.quantity;
    },0);

    const { items } = cartCtx;
    // console.log(cartCtx);

    // useEffect(() => {
    //     totalItems = cartCtx.items.reduce((prev, curr) => {
    //         return prev+curr.quantity;
    //     },0);
    // },[items]);

    

    const openModal = function() {
        setShowModal(true);
    }
    const closeModal = function() {
        setShowModal(false);
    }

    useEffect (() => {        
        document.addEventListener("keydown", (e) => {
            if(e.key === 'Escape') {
                closeModal();
            }
        });
    }, []);

    const ModalComp = <Modal closeModal={closeModal}>
        <CartConfirm cartCtx={cartCtx} closeModal={closeModal}></CartConfirm>
    </Modal>

    return (
        <div className={classes["cart-button"]}>
            {/* <img src="react-meals/public/shopping-cart-icon.png" alt="Shopping Cart Icon"/> */}
            <CartIcon/>
            Your Cart 
            <button className={classes["badge"]} onClick={openModal}>{totalItems}</button>   
            {/* {showModal && <Modal closeModal={closeModal}/>}              */}
            {showModal && ModalComp}             
        </div>
    )
}
export default CartButton;