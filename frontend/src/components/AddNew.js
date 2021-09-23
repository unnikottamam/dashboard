import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup
  .object({
    make: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    price: yup.string().required(),
  })
  .required();

function AddNew() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/products", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row className="justify-content-center">
      <Col xs md="10" lg="8">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-2" controlId="make">
            <Form.Label>Make</Form.Label>
            <Controller
              name="make"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control placeholder="Make" {...field} />
              )}
            />
            <p>{errors.make?.message}</p>
          </Form.Group>
          <Form.Group className="mb-2" controlId="model">
            <Form.Label>Model</Form.Label>
            <Controller
              name="model"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control placeholder="Model" {...field} />
              )}
            />
            <p>{errors.model?.message}</p>
          </Form.Group>
          <Form.Group className="mb-2" controlId="year">
            <Form.Label>Year</Form.Label>
            <Controller
              name="year"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control placeholder="Year" {...field} />
              )}
            />
            <p>{errors.year?.message}</p>
          </Form.Group>
          <Form.Group className="mb-2" controlId="price">
            <Form.Label>Price</Form.Label>
            <Controller
              name="price"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control placeholder="Price" {...field} />
              )}
            />
            <p>{errors.price?.message}</p>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default AddNew;
