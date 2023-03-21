import './App.css';
import Navbar from './components/navbar';
import { Routes, Route} from "react-router-dom"
import Products from './pages/products';
import Cart from './pages/cart';
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route index path="/" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
     
    </div>
  );
} 

export default App;
