import styled from "styled-components";

const AddLinkPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  padding: 10px;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }

  .title {
    font-weight: 800;
    padding: 10px 0 10px 0;
  }

  p {
    font-size: 1.1rem;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
  }

  .returnHome {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 20px 20px 0px;
    margin-top: 20px;
    z-index: 8000;

    .icon {
      font-size: 0.9em;
      margin-right: 10px;
    }
  }

  a {
    color: black;
    font-weight: bold;
    font-size: 0.9rem;

    :hover,
    :active  {
      color: black;
    }
  }

  .addLinkForm {
    width: 100%;
  }
  
  .inputText {
    padding: 0 !important;
    margin: 0 0 .2em 0;
    width: 100%;

    :hover,
    :active,
    :focus {
      border-color: black;
    }
  }

  .inputLabel {
    font-size: 1.1rem;
    margin: 0 0 .2em 0;
  }

  .feedbackLabel {
    margin: 0;
    padding: 0;
  }

  .submitButton {
    font-size: 1.4em;
    font-weight: 800;
    background-color: black;
    color: white;
    border-color: black;
    border-radius: 2em;
    padding: 0.2em 1.8em 0.2em 1.8em;

    :hover {
      background-color: white;
      color: black;
      border-color: white;
    }
  }
`;

export { AddLinkPageContainer };
