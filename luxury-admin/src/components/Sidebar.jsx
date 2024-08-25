import { Col } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import '../styles/Sidebar.css'

function Sidebar() {

    const location = useLocation();
    return (
        <>
            {/* Sidebar */}
            <Col className="sidebar-container p-3 my-auto bg-dark text-white w-sidebar rounded">
                <Link to={'/'} className="text-white text-decoration-none">
                    <h5>Luxury</h5>
                </Link>
                <hr />
                <ul className="list-unstyled">
                    <Link to={'/'} className="text-white text-decoration-none">
                        <li className={`rounded my-2 ${location.pathname === '/' ? 'active' : ''}`} >Dashboard</li>
                    </Link>
                    <Link to={'/addProduct'} className="text-white text-decoration-none">
                        <li className={`rounded my-2 ${location.pathname === '/addProduct' ? 'active' : ''}`} >Add Product</li>
                    </Link>
                    <Link to={'/productList'} className="text-white text-decoration-none">
                        <li className={`rounded my-2 ${location.pathname === '/productList' ? 'active' : ''}`} >Products List</li>
                    </Link>
                    {/* Add more sidebar items */}
                </ul>
            </Col>
        </>
    )
}

export default Sidebar