import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
