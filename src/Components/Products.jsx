import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:3005/products/${productId}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch(error => console.error("Error deleting product:", error));
  };

  return (
    <div className="products p-5 m-3">
      <div className="container">
        <div className="product-header d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary fw-bold">Our Products</h1>
          <Link to="/products/add"> {/* تعديل */}
            <Button className="btn btn-primary btn-lg rounded-circle shadow">
              <i className="bi bi-plus"></i>
            </Button>
          </Link>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm border-0 product-card">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-dark fw-bold">
                    Product Name: {product.name}
                  </Card.Title>
                  <Card.Text className="mb-4">
                    <strong>Product Price:</strong> {product.price}
                    <br />
                    <strong>Product Quantity:</strong> {product.quantity}
                  </Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </Button>
                    <div>
                      <Link to={`/products/${product.id}`}>
                        <Button className="btn btn-view">
                          <i className="bi bi-eye"></i>
                        </Button>
                      </Link>
                      <Link to={`/products/${product.id}/edit`}>
                        <Button className="btn btn-edit ms-2">
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
  