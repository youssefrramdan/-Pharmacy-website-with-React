import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import "./ProductsDetails.css"; // تأكد من تضمين ملف CSS

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details p-5">
      <div className="container">
        <Link to="/products">
          <Button variant="secondary">Back to Products</Button>
        </Link>
        <Card className="mt-4 product-card">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <Card.Body>
            <Card.Title className="text-dark fw-bold">
              {product.name}
            </Card.Title>
            <Card.Text>
              <strong>Price:</strong> ${product.price}
              <br />
              <strong>Quantity:</strong> {product.quantity}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
