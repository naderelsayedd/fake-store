import './App.css';
import Header from './components/Header';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Error from './components/NoPage';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='product/:productID' element={<ProductDetails />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>      
    </div>
  );
}

export default App;
