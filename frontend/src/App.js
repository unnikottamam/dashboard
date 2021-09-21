import Navigation from "./components/Navigation";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import AddNew from "./components/AddNew";

function App() {
  return (
    <Router>
      <Navigation />
      <Container className="pt-4">
        <Route exact path="/add-new">
          <AddNew />
        </Route>
        <Route exact path="/edit">
          <AddNew />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Container>
    </Router>
  );
}

export default App;
