import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
