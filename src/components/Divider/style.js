import styled from "styled-components";

const AddLinkItemContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-width: 1px;
  border-color: lightgray;
  border-style: solid;
  border-radius: 7px;
  padding: 5px;
  width: auto;

  p {
    margin: 0;
    padding: 0;
  }

  button {
    font-size: 60px;
    font-weight: bold;
    padding: 0 15px 7px 15px;
    margin-left: 5px;
    color: black;
    background-color: #ececec;
    border-color: gray;
    line-height: 1
  }
`;

const SubmitLinkText = styled.p`
  font-size: 25px;
  font-weight: bold;
  padding: 25px !important;
`;

export {AddLinkItemContainer, SubmitLinkText};