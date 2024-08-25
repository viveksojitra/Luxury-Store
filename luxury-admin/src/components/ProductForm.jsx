import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { productPostAsync, uploadFile } from '../store/actions/productActions';
import '../styles/ProductForm.css'

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const [profile, setProfile] = useState(null);

    const [input, setInput] = useState({
        id: '',
        profile: '',
        brand: '',
        model: '',
        currency: '$',
        price: '',
        case_material: '',
        dial_color: '',
        movement: '',
        water: '',
        description: '',
    });

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        setProfile(file);
        setInput({
            ...input,
            profile: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let updatedInput = { ...input };

            if (profile) {
                const uploadedFile = await dispatch(uploadFile(profile, input));
                updatedInput = {
                    ...input,
                    profile: uploadedFile.url,
                };
            }

            dispatch(productPostAsync(updatedInput));
        } catch (error) {
            console.error("Error creating product:", error);
        }
        setIsSubmit(true);
    };


    useEffect(() => {
        if (isSubmit) {
            navigateTo('/');
        }
    }, [isSubmit, navigateTo]);

    return (
        <Container className="create-product position-absolute h-100">
            <Row className="justify-content-md-center mt-5 pb-5">
                <Col md={8}>
                    <Form.Control className="input" type="text" name='id' value={input.id} onChange={handleChange} hidden />
                    <h2 className='pb-5'>Add New Product</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Product Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="profile"
                                onChange={handleProfileChange}
                                // required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Manufacturare</Form.Label>
                            <Form.Control
                                className='text-capitalize'
                                type="text"
                                name="brand"
                                value={input.brand}
                                onChange={handleChange}
                                placeholder="Enter company name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                                value={input.model}
                                onChange={handleChange}
                                placeholder="Enter model name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={input.price}
                                onChange={handleChange}
                                placeholder="Enter price in USD"
                                required
                            />
                            {/* USD */}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Case Material</Form.Label>
                            <Form.Control
                                type="text"
                                name="case_material"
                                value={input.case_material}
                                onChange={handleChange}
                                placeholder="Enter case material"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dial Color</Form.Label>
                            <Form.Control
                                type="text"
                                name="dial_color"
                                value={input.dial_color}
                                onChange={handleChange}
                                placeholder="Enter dial color"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddress" className="mb-3">
                            <Form.Label>Movement</Form.Label>
                            <Form.Control
                                type="text"
                                name="movement"
                                value={input.movement}
                                onChange={handleChange}
                                placeholder="Enter movement - automatic/manual"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddress" className="mb-3">
                            <Form.Label>Water Resistance</Form.Label>
                            <Form.Control
                                type="text"
                                name="water"
                                value={input.water}
                                onChange={handleChange}
                                placeholder="Enter water resistance - meter"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formNotes" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={input.description}
                                onChange={handleChange}
                                placeholder="Enter description"
                            />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Add Product
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;
