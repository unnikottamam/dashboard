import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Form,
  Button,
  FormControl,
  Container,
  Nav,
  Row,
} from "react-bootstrap";

export default function Navigation() {
  const [keyword, setKeyword] = React.useState("");
  let history = useHistory();
  const searchClick = () => {
    let path = `/?s=${keyword}`;
    history.push(path);
  };
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Link className="btn btn-outline-success me-2" to="/">
            Home
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="justify-content-between"
            id="navbarScroll"
          >
            <Nav className="me-auto">
              <Link className="btn btn-primary" to="/add-new">
                Add New
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Type here..."
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button onClick={searchClick} variant="outline-primary">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
