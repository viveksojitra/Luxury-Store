import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productPostAsync, productSelectAsync, productUpdateAsync, uploadFile } from '../store/actions/productActions';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import getImageUrl from '../services/getImgURL';
import '../styles/ProductForm.css'
import '../styles/UpdateForm.css';

const UpdateForm = () => {
    const { id } = useParams();
    const { product } = useSelector(state => state.productReducer);

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

            if (profile && typeof profile !== 'string') {
                const uploadedFile = await dispatch(uploadFile(profile, updatedInput));
                updatedInput = {
                    ...updatedInput,
                    profile: uploadedFile.url,
                };
            }

            if (id) {
                dispatch(productUpdateAsync(updatedInput));
            } else {
                dispatch(productPostAsync(updatedInput));
            }

            setIsSubmit(true);
        } catch (error) {
            console.error("Error creating or updating product:", error);
        }
    };

    // useEffect(() => {
    //     if (product) {
    //         setInput(product);
    //     }
    // }, [product]);

    useEffect(() => {
        if (id) {
            dispatch(productSelectAsync(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (product) {
            setInput(product);
            if (product.profile) {
                setProfile(product.profile);
            }
        }
    }, [product]);

    useEffect(() => {
        if (isSubmit) {
            navigateTo('/');
        }
    }, [isSubmit, navigateTo]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="create-product-page d-flex justify-content-center align-items-center bg-dark text-white my-2 rounded p-5 overflow-y-auto position-relative">
            <Container className="create-product position-absolute h-100">
                <Row className="justify-content-md-center mt-5 pb-5">
                    <Col md={8}>
                        <Form.Control className="input" type="text" name='id' value={input.id} onChange={handleChange} hidden />
                        <h2 className='pb-5'>Update Product</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Product Image</Form.Label>
                                {
                                    getImageUrl(input.profile) && (
                                        <div className="mt-3">
                                            <img className='profile-Update mb-3 rounded' src={getImageUrl(input.profile)} alt="Profile" />
                                        </div>
                                    )
                                }
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

                            <Button variant="info" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default UpdateForm;
