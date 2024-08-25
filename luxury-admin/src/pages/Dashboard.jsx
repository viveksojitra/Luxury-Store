import { Col, Row } from "react-bootstrap";
import "../styles/Dashboard.css";
import NavSection from "../components/Navbar";
import Cards from "../components/Dashboard/Cards";
import ProductList from "../components/ProductList";

function Dashboard() {
    return (
        <>
            {/* Main Content */}
            <Col className="body-container d-flex flex-column justify-content-center px-4 h-100 w-dashboard">
                <h2 className="title-dashboard text-muted fw-bold">Dashboard</h2>
                <NavSection />
                {/* Add more dashboard content */}
                <Row className="cards-row d-flex justify-content-center mb-4">
                    <Cards />
                </Row>

                <Row className="table-row d-flex justify-content-center wv-100 border border-dark border-opacity-25 rounded">
                    <ProductList />
                </Row>
            </Col>
        </>
    );
}

export default Dashboard;
