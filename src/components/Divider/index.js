import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

const DividerItem = styled.div`
  width: 50%;
  margin-bottom: 1rem;
  border: 0;
  border-top: 3px solid rgba(0, 0, 0, 0.1);
`;

function Divider() {
  return (
    <Row className="d-flex justify-content-center">
      <DividerItem />
    </Row>
  );
}

export default Divider;
