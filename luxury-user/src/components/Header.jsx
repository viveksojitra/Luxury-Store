import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Header.css'
import { loadCart, removeFromCart } from "../store/actions/cartAction";

function Header() {

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartReducer);

    useEffect(() => {
        dispatch(loadCart());
    }, [dispatch]);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    {
                        cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul className="list-group">
                                {cartItems.map(item => (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center border-0">
                                        <div className="cart-container d-flex justify-content-center align-items-center gap-2">
                                            <div className="cart-image-container d-flex justify-content-center align-items-center rounded">
                                                <img src={item.profile} alt={item.name} className="cart-image rounded" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h5 className="cart-brand text mb-1">{item.brand}</h5>
                                                <h6 className="text-muted mb-1">{item.model}</h6>
                                            </div>
                                        </div>
                                        <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>
                                            <i>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </Offcanvas.Body>
            </Offcanvas>

            <Navbar bg="dark" variant="dark" sticky="top" className='navbar w-100 p-2'>
                <Container className='gap-4'>
                    <Navbar.Brand>
                        <Link to={'*'} className='textTitle text-white text-decoration-none'>
                            <h5>Luxury</h5>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-uppercase">
                            <Link to={''} className='textNav'>Men</Link>
                            <Link to={''} className='textNav'>Women</Link>
                            <Link to={''} className='textNav'>Kids</Link>
                            <Link to={''} className='textNav'>Home & Living</Link>
                            <Link to={''} className='textNav'>Beauty</Link>
                            <Link to={''} className='textNav'>Studio</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button variant="" onClick={handleShow}>
                        <i className="cart-icon">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </i>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header