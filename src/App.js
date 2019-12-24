import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Jumbotron, Container } from "react-bootstrap";
import Header from "./components/Header";
import ListLinkPage from "./pages/ListLinkPage";
import AddLinkPage from "./pages/AddLinkPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Container lg="true">
          <Jumbotron style={{ backgroundColor: "white" }}>
            <Header />
            <Switch>
              <Route path="/" exact component={() => <ListLinkPage />} />
              <Route path="/addlink" exact component={() => <AddLinkPage />} />
              <Route component={() => <ErrorPage />} />
            </Switch>
          </Jumbotron>
        </Container>
      </Router>
    </>
  );
}

export default App;
