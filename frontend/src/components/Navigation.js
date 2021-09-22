import * as React from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Navbar,
  Form,
  Button,
  FormControl,
  Container,
  Nav,
} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

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
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="justify-content-between"
            id="navbarScroll"
          >
            <Nav>
              <NavLink exact className="btn btn-outline-primary me-2" to="/">
                Home
              </NavLink>
              <NavLink exact className="btn btn-outline-primary" to="/add-new">
                Add New <FiPlus />
              </NavLink>
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
