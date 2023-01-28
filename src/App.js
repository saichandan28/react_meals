// import TodoList from './components/TodoList';
import Header from './components/Header';
import Body from './components/Body';
import CartProvider from './CartProvider';

// import Counter from './components/Counter';


// const modalContainer = ReactDOM.createPortal (Modal,document.getElementById('modal-container'));

/* const nullCart = {
  items: [],
  amount: 0
};
 */
function App() {
  
  
  return (
    <div>
      
      {/* <Counter></Counter> */}
      <CartProvider>
        <Header >

        </Header>
        <Body>

        </Body>
      </CartProvider>
      

    </div>
    
  );
}

export default App;