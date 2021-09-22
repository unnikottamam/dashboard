import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddNew() {
  return (
    <Row className="justify-content-center">
      <Col xs md="10" lg="8">
        <Form>
          <Form.Group className="mb-2" controlId="formField1">
            <Form.Label>Field 1</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formField2">
            <Form.Label>Field 2</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formField3">
            <Form.Label>Field 3</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formField4">
            <Form.Label>Field 4</Form.Label>
            <Form.Control type="text" placeholder="" />
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
