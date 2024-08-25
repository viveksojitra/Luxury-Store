import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDeleteAsync, productGetAsync, productSelectAsync } from '../store/actions/productActions';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const { products } = useSelector((state) => state.productReducer);

  const handleUpdate = (id) => {
    dispatch(productSelectAsync(id));
    navigateTo(`/update/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(productDeleteAsync(id));
  };

  useEffect(() => {
    dispatch(productGetAsync());
  }, [dispatch]);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-list w-100 m-2 py-1 px-3">
      <h2 className="title-dashboard text-muted fw-bold">Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th>Material</th>
            <th>Dial Color</th>
            <th>Movement</th>
            <th>Resistance</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr key={product.id}>
                <td><img src={product.profile} alt="profile" className="product-image" /></td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td>{product.currency} {product.price}</td>
                <td>{product.case_material}</td>
                <td>{product.dial_color}</td>
                <td>{product.movement}</td>
                <td>{product.water}</td>
                <td>{product.description}</td>
                <td>
                  <Button variant="warning" className="me-2" onClick={() => handleUpdate(product.id)}>
                    <FontAwesomeIcon icon={faEdit} /> 
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon icon={faTrash} /> 
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
