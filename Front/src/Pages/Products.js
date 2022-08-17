import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AddOrder } from "../App/OrderSlicer";
import Color from "../Components/Color";

function Products() {
  const [product, Setproducts] = useState([]);
  const [image, Setimage] = useState();
  // const [orderd, SetOrder] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { name } = useParams();
  useEffect(() => {
    const sendRequest = async () => {
      const respones = await axios.get(
        `http://localhost:8000/api/products/${name}`
      );
      Setproducts(respones.data);
      Setimage(respones.data.image);

      // console.log(respones.data);
    };
    sendRequest();
  }, [name]);

  const changeimageHandler = (newImage, name) => {
    Setimage(newImage);
  };
  const AddOrderHandler = (product, image) => {
    let Newproduct = product;
    Newproduct.image = image;
    dispatch(AddOrder(Newproduct));
  };

  return (
    <div className="mt-3">
      <Row className="justify-content-start">
        <Col sm={5} md={3}>
          <Link className="btn  btn-light ms-4 my-4 shadow-sm " to={"/"}>
            بازگشت به صفحه اصلی
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Image src={image} fluid />
          <div className="d-flex justify-content-center">
            {product.color
              ? product.color.map((item) => {
                  return (
                    <Color
                      key={item.id}
                      clicked={() => changeimageHandler(item.image, item.name)}
                      name={item.name}
                    >
                      {item.name}
                    </Color>
                  );
                })
              : null}
          </div>
        </Col>
        <Col md={4}>
          <ListGroup className="mb-4 mt-5 " variant="flush">
            <ListGroupItem>{product.name}</ListGroupItem>
            <ListGroupItem>{product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
          <Link to={"/Cart"}>
            <Button
              onClick={() => AddOrderHandler(product, image)}
              className="btn btn-primary w-100 mt-3 mb-5 p-2"
            >
              افزودن به سبد خرید
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Products;
