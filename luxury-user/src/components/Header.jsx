import { Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, removeFromCart } from "../store/actions/cartAction";
import { signOutUser } from "../store/actions/authAction";
import '../styles/Header.css'

function Header() {

    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const { cartItems } = useSelector(state => state.cartReducer);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogOut = async () => {
        await dispatch(signOutUser())
        navigateTo("/login");
    }

    useEffect(() => {
        dispatch(loadCart());
    }, [dispatch]);

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
                        <Link to={'/'} className='textTitle text-white text-decoration-none'>
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
                    <div className="toggle-container d-flex justify-content-center align-items-center">
                        <Button variant="" onClick={handleShow}>
                            <i className="cart-icon">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </i>
                        </Button>
                        <li className='li-logout cart-icon d-flex justify-content-center align-items-center'>
                            <Dropdown className="m-0 p-0">
                                <Dropdown.Toggle className="m-0 p-0 border-0 d-flex justify-content-center align-items-center" variant="button" id="user-menu-dropdown">
                                    <a href="#login" className="user-icon">
                                        <i className="material-icons position-relative d-flex justify-content-center align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                            </svg>
                                        </i>
                                    </a>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className="card-logout m-0">
                                        <Button className='logout-container' onClick={handleLogOut}>
                                            <h5>Logout</h5>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                            </svg>
                                        </Button>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header