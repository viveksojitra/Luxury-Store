import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import '../styles/Product.css'
import { addToCart } from "../store/actions/cartAction";

function Product() {
    const { products } = useSelector(state => state.productReducer);
    const { id } = useParams();
    
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const nevigateTo = useNavigate();

    const handleNevigate = (id) => {
        nevigateTo(`/product/${id}`);
    }

    const singleRecord = products.filter(data => {
        return (
            data.id == id
        )
    });

    const suggestion = products.filter(data => {
        return (
            data.id != id
        )
    })

    return (
        <>
            <Container id="top">
                <Row>
                    <Col className="my-3">
                        <Card className="watch-card-none">
                            <Card.Img variant="top" src={singleRecord[0].profile} />
                        </Card>
                    </Col>
                    <Col className="my-3">
                        <Card className="watch-card-none border-0">
                            <div className="product-container d-flex flex-row justify-content-between align-items-center">
                                <div className="product-title d-flex flex-column">
                                    <h3>{singleRecord[0].brand}</h3>
                                    <p className="light">{singleRecord[0].model}</p>
                                </div>
                                <div className="product-cart d-flex">
                                    <button className="btn btn-addToCart fw-medium" onClick={() => handleAddToCart(singleRecord[0])}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="line"></div>

                            <h3>{singleRecord[0].currency} {singleRecord[0].price}</h3>
                            <p className="tex-title">inclusive of all texes</p>
                            <p className="extra-desc">100% Original Products</p>
                            <p className="extra-desc">Pay on delivery might be available</p>
                            <p className="extra-desc">Easy 14 days returns and exchanges</p>
                            <div className="line"></div>

                            <h4>product details</h4>
                            <p className="details">Case Material: {singleRecord[0].case_material}</p>
                            <p className="details">Dial Color: {singleRecord[0].dial_color}</p>
                            <p className="details">Mechanism: {singleRecord[0].movement}</p>
                            <p className="details">Water Resistance: {singleRecord[0].water}</p>
                            <p className="details">Description: {singleRecord[0].description}</p>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="watches-container">
                <Row>
                    {
                        suggestion.map((watch) => (
                            <Col key={watch.id} xs={12} md={6} lg={4} className="my-3">
                                <Card className="watch-card" onClick={() => handleNevigate(watch.id)}>
                                    <Card.Img variant="top" src={watch.profile} />
                                    <Card.Body>
                                        <Card.Title>{watch.brand}</Card.Title>
                                        <Card.Title>{watch.model}</Card.Title>
                                        <Card.Text>{watch.currency} {watch.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Product