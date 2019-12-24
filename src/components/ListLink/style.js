import styled from "styled-components";

const LinkListContainer = styled.div`
  /* max-width: 85%; */
  /* width: 500px; bunu değiştir!! */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  border-radius: 7px;
  margin-bottom: 1.5em;

  p {
    margin: 0;
    padding: 0;
  }

  button,
  button:hover {
    font-size: 2rem;
    font-weight: bold;
    padding: 5px 20px 15px 20px;
    margin: 5px 5px 5px 5px;
    color: black;
    background-color: #ececec;
    border-color: gray;
    line-height: 1;
    cursor: default;

    .points {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .pointsText {
      font-size: 1rem;
      font-weight: 300;
      padding-top: 0.5rem;
    }
  }

  .removeItem {
    display: none;
    font-size: 1.5em;
    position: absolute;
    right: -12px;
    top: -12px;
    padding: 0;
    margin: 0;

    .removeItemIcon {
      background-color: white;
      color: #dc3545;
      border-radius: 100px;
    }
  }

  :hover {
    background-color: #f9f9f9;
    border-width: 1px;
    border-color: lightgray;
    border-style: solid;
    border-radius: 7px;
    position: relative;

    .removeItem {
      display: flex;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

const LinkDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* height: 100%; */
  height: 6em;
  justify-content: space-around;
  padding-left: 1em;
  `;

const LinkDetailNameAndURL = styled.div`
  p {
    font-size: 1.2em;
    font-weight: bold;
    color: black;
    line-height: 1;
    padding-right: 1em;
  }
  
  small {
    color: #7f7f7f;
    letter-spacing: 0.02em;
  }
  `;

const LinkDetailVoteButtons = styled.div`
  display: flex;
  flex-direction: row;
  color: #7f7f7f;
  font-size: 0.7em;
  /* margin-top: 1em; */


  p {
    font-weight: bold;
    padding-left: 0.2em;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 6em;
  }
`;

export {
  LinkListContainer,
  LinkDetail,
  LinkDetailNameAndURL,
  LinkDetailVoteButtons
};
