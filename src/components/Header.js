import classes from './Header.module.css';
import CartButton from './CartButton';
// import Hello from './Hello';

const Header = (props) => {

    return (
        <header>
            ReactMeals
            
            <CartButton ></CartButton>
        </header>
    );
}

export default Header;