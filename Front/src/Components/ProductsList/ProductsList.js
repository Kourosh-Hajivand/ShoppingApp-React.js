import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductList.css";
function ProductsList(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(props.products);
  return (
    <>
      {props.products.map((item, index) => {
        return (
          <Col key={index} sm={6} md={4} xl={3}>
            <Card className="m-3 border-0 shadow">
              <Link to={`/Products/${item.name}`}>
                <Card.Img variant="top" src={item.image} />
              </Link>
              <Card.Body>
                <div className="Titel mb-3">
                  <Link id="Link" to={`/Products/${item.name}`}>
                    <Card.Title className="titel">{item.name}</Card.Title>
                  </Link>
                  <Card.Title className="Price">{item.price}</Card.Title>
                </div>
                <Card.Text>{item.description}</Card.Text>
                <Link to={`/Products/${item.name}`}>
                  <Button className="w-50" variant="primary">
                    خرید
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default ProductsList;
