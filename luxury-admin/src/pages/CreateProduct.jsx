import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AddProduct from '../components/ProductForm';

const CreateProduct = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <Container className="create-product-page d-flex justify-content-center align-items-center bg-dark text-white my-2 rounded p-5 overflow-y-auto position-relative">
            <AddProduct onClose={handleClose} />
        </Container>
    );
};

export default CreateProduct;
