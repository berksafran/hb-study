import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AddLinkPageContainer } from "./style";
import _ from "lodash";
import ToastWarn from "../../components/ToastWarn";

function AddLinkPage() {
  const [validated, setValidated] = useState(false);
  const [linkName, setLinkName] = useState();
  const [linkURL, setLinkURL] = useState();
  const [showToast, setShowToast] = useState({
    status: false,
    name: ''
  });

  // This variable is for using Ref and clear all inputs of add link form.
  let addLinkForm = '';

  const handleSubmit = event => {
    const form = event.currentTarget;

    // Check input forms
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      event.preventDefault();
    } else {
      setValidated(true);
      event.preventDefault();

      // Creating new link 
      var currentTime = new Date().getTime()
      const linksArray = JSON.parse(localStorage.getItem("linksArray"));
      const newLinkItem = {
        id: currentTime,
        linkName: linkName,
        linkURL: linkURL,
        modifiedDate: currentTime,
        voteCounter: 0,
        points: 0
      };

      // Is there any data in Localstorage? If yes, add new item to array.
      if (_.isArray(linksArray)) {
        let newLinksArray = [...linksArray, newLinkItem];
        localStorage.setItem("linksArray", JSON.stringify(newLinksArray));
      } else {
        // If not, create new array.
        let newLinksArray = [newLinkItem];
        localStorage.setItem("linksArray", JSON.stringify(newLinksArray));
      }
      
      setShowToast({
        status: true,
        name: linkName
      });

      addLinkForm.reset();
      setValidated(false);
    }
  };

   // Open or Close Toast
   function handleToast() {
    setShowToast({
      ...showToast,
      status: !showToast,
      name: linkName
    });
  }

  return (
    <AddLinkPageContainer>
    <ToastWarn showToast={showToast} handleToast={() => handleToast()} toastType="add" />
      <Row className="returnHome" id="returnHome">
        <FaArrowLeft className="icon" />
        <Link to="/">Return to List</Link>
      </Row>
      <Row className="mt-0">
        <h2 className="title">Add New Link</h2>
      </Row>
      <Row className="mt-0">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="addLinkForm"
          ref={ref => addLinkForm = ref}
        >
          <Form.Label className="inputLabel">Link Name:</Form.Label>
          <Form.Row>
            <Form.Group md="4" controlId="linkName" className="inputText">
              <Form.Control
                required
                onChange={e => setLinkName(e.target.value)}
                type="text"
                placeholder="e.g. Alphabet"
              />
            </Form.Group>
          </Form.Row>
          <Form.Label className="inputLabel">Link URL:</Form.Label>
          <Form.Row>
            <Form.Group md="4" controlId="linkURL" className="inputText">
              <Form.Control
                required
                type="url"
                placeholder="e.g. http://abc.xyz"
                onChange={e => setLinkURL(e.target.value)}
                ref={ref => {ref = linkURL}}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-end">
            <Button id="submitButton" className="btn btn-secondary submitButton" type="submit">
              ADD
            </Button>
          </Form.Row>
        </Form>
      </Row>
    </AddLinkPageContainer>
  );
}

export default AddLinkPage;
