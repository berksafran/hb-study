import React from "react";
import { Button } from "react-bootstrap";
import { AddLinkContainer, SubmitLinkText } from "./style";
import { NavLink } from "react-router-dom";

function AddLink() {
  return (
    <AddLinkContainer>
      <NavLink to="/addlink">
        <Button variant="outline-secondary" size="large" name="addLinkButton">
          +
        </Button>
      </NavLink>
      <SubmitLinkText>SUBMIT A LINK</SubmitLinkText>
    </AddLinkContainer>
  );
}

export default AddLink;
