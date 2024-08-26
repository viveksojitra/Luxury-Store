/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../styles/PageNotFound.css"; // Custom CSS for additional styling
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PageNotFound = () => {

    const navigateTo = useNavigate();
    const { isLogin } = useSelector((state) => state.authReducer);

    useEffect(() => {
        if (isLogin) {
            navigateTo('/');
        }
    }, [isLogin, navigateTo]);
    return (
        <Container className="page-not-found d-flex flex-column align-items-center justify-content-center">
            <Row className="text-center">
                <Col>
                    {/* <img
                        src="https://example.com/luxury-watch-placeholder.jpg" // Replace with a real luxury watch image
                        alt="Luxury Watch"
                        className="img-fluid not-found-image"
                    /> */}
                    <h1 className="display-4 mt-4">404 - Page Not Found</h1>
                    <p className="lead">Oops! The page you're looking for doesn't exist.</p>
                    <p>It seems like the luxury timepiece you're searching for is out of reach.</p>
                    <div className="mt-4">
                        <Link to="/">
                            <Button variant="primary" className="me-2">
                                <FontAwesomeIcon icon={faHome} className="me-2" />
                                Go to Homepage
                            </Button>
                        </Link>
                        <Link to="/shop">
                            <Button variant="outline-secondary">
                                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                                Back to Shop
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PageNotFound;
