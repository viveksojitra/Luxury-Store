import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BANNER from '../services/banner.js'
import '../styles/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productGetAsync } from '../store/actions/productActions.js';

function Home() {

    const dispatch = useDispatch();

    const { isLogin } = useSelector((state) => state.authReducer);
    const { products } = useSelector((state) => state.productReducer);

    const navigateTo = useNavigate();

    const handleNevigate = (id) => {
        navigateTo(`/product/${id}`);
    }

    useEffect(() => {
        dispatch(productGetAsync());
    }, [dispatch]);

    useEffect(() => {
        if (!isLogin) {
            navigateTo("/login");
        }
    }, [isLogin, navigateTo]);

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App bg-dark">
            <div className="banner overflow-hidden object-fit-cover">
                <Image src={BANNER.banner1} fluid />
            </div>
            <Container className="watches-container">
                <Row className='products-row'>
                    {
                        products.map((data) => (
                            <Col key={data.id} xs={12} md={6} lg={4} className="my-3">
                                <Card className="watch-card" onClick={() => handleNevigate(data.id)}>
                                    <Card.Img variant="top" src={data.profile} />
                                    <Card.Body>
                                        <Card.Title className='brand'>{data.brand}</Card.Title>
                                        <Card.Title className='model'>{data.model}</Card.Title>
                                        <Card.Text className='currency'>{data.currency} {data.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home
