import React, { useEffect } from "react";
import "./Body.css";
import { Container, Row } from "react-bootstrap";
import ProductsList from "../ProductsList/ProductsList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddProducts } from "../../App/ProductSlicer";

function Body() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.value);

  // console.log(products);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((respones) => {
        dispatch(AddProducts(respones.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
  return (
    <Container>
      <Row className="text-center my-4">
        <h2>محصولات</h2>
      </Row>
      <Row>
        <ProductsList products={products} />
      </Row>
    </Container>
  );
}

export default Body;
