import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router';
import ProductList from './components/ProductList';
import CreateProduct from './pages/CreateProduct';
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import UpdateForm from './components/UpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Dashboard.css";
import './App.css'

function App() {

  return (
    <Container fluid className="vh-100">
      <div className="h-100 d-flex flex-row">
        {/* Sidebar */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addProduct" element={<CreateProduct />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App
