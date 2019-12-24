import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="d-flex flex-column justify-content-start">
      <h1 className="mt-5 ml-5">Something went wrong!</h1>
      <strong>
        <NavLink to="/">
          <Button variant="outline-secondary" className="m-5">
            Return to home page
          </Button>
        </NavLink>
      </strong>
    </div>
  );
}

export default ErrorPage;
