import React, { useState } from "react";
import { Row, DropdownButton, Dropdown, Pagination } from "react-bootstrap";
import AddLink from "../../components/AddLink";
import Divider from "../../components/Divider";
import ListLink from "../../components/ListLink";
import RemoveModal from "../../components/RemoveModal";
import ToastWarn from "../../components/ToastWarn";
import _ from "lodash";
import "./style.css";

function ListLinkPage() {
  const [linksArray, setLinksArray] = useState(
    JSON.parse(localStorage.getItem("linksArray"))
  );
  const [showModal, setShowModal] = useState({
    status: false,
    name: "",
    id: ""
  });
  const [showToast, setShowToast] = useState({
    status: false,
    name: ""
  });
  const [orderType, setOrderType] = useState("mostVoted");
  const [selectedPage, setSelectedPage] = useState(0);

  // Up vote for specific link
  function upVote(linkID) {
    const targetItemIndex = _.findIndex(linksArray, o => o.id === linkID);
    let newArray = [...linksArray];
    ++newArray[targetItemIndex].voteCounter;
    ++newArray[targetItemIndex].points;
    newArray[targetItemIndex].modifiedDate = new Date().getTime();
    setLinksArray(newArray);
    localStorage.setItem("linksArray", JSON.stringify(newArray));
  }

  // Down vote for specific link
  function downVote(linkID) {
    const targetItemIndex = _.findIndex(linksArray, o => o.id === linkID);
    let newArray = [...linksArray];
    ++newArray[targetItemIndex].voteCounter;
    --newArray[targetItemIndex].points;
    newArray[targetItemIndex].modifiedDate = new Date().getTime();
    setLinksArray(newArray);
    localStorage.setItem("linksArray", JSON.stringify(newArray));
  }

  // Remove link
  function removeLink(linkID) {
    let newArray = _.filter(linksArray, o => o.id !== linkID);
    let removedItemName = _.filter(linksArray, o => o.id === linkID);
    setLinksArray([...newArray]);
    localStorage.setItem("linksArray", JSON.stringify(newArray));
    handleModal();
    setShowToast({
      status: true,
      name: removedItemName[0].linkName
    });
  }

  // Open or Close Modal
  function handleModal() {
    setShowModal({
      status: !showModal,
      name: "",
      id: ""
    });
  }

  // Open or Close Toast
  function handleToast() {
    setShowToast({
      ...showToast,
      status: !showToast
    });
  }

  // Order by Vote Counts
  const newLinksArray = () => {
    function orderArray() {
      // if (orderType === "mostVoted") {
      //   return _.orderBy(
      //     linksArray,
      //     ["voteCounter", "modifiedDate"],
      //     ["desc", "desc"]
      //   );
      // } else if (orderType === "mostVoted") {
      //   return _.orderBy(
      //     linksArray,
      //     ["voteCounter", "modifiedDate"],
      //     ["asc", "asc"]
      //   );
      // }

      switch (orderType) {
        case "mostVoted":
          return _.orderBy(
            linksArray,
            ["voteCounter", "modifiedDate"],
            ["desc", "desc"]
          );
        case "lessVoted":
          return _.orderBy(
            linksArray,
            ["voteCounter", "modifiedDate"],
            ["asc", "desc"]
          );
        case "bestRated":
          return _.orderBy(
            linksArray,
            ["points", "modifiedDate"],
            ["desc", "desc"]
          );
        case "worstRated":
          return _.orderBy(
            linksArray,
            ["points", "modifiedDate"],
            ["asc", "desc"]
          );
        default:
          return null;
      }
    }
    return _.chunk(orderArray(), 5);
  };

  // Pagination
  let items = [];
  function pagination() {
    for (let number = 1; number <= newLinksArray().length; number++) {
      items.push(
        <div key={number} className="pagination">
          <Pagination.Item
            key={number}
            active={number === selectedPage + 1}
            onClick={() => setSelectedPage(number - 1)}
            className="pagination"
          >
            {number}
          </Pagination.Item>
        </div>
      );
    }
  }

  pagination();

  return (
    <div>
      <Row className="d-flex justify-content-center m-4">
        <AddLink />
      </Row>
      <Divider />
      <Row className="d-flex justify-content-center m-4 p-2">
        <DropdownButton
          id="orderbyButton"
          title="Order by"
          variant="secondary"
          block="true"
        >
          <Dropdown.Item onClick={() => setOrderType("mostVoted")} active={orderType === 'mostVoted' ? true : false}>
            Most Voted
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setOrderType("lessVoted")} active={orderType === 'lessVoted' ? true : false}>
            Less Voted
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => setOrderType("bestRated")} active={orderType === 'bestRated' ? true : false}>
            Best Rated
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setOrderType("worstRated")} active={orderType === 'worstRated' ? true : false}>
            Worst Rated
          </Dropdown.Item>
        </DropdownButton>
      </Row>
      <Row className="d-flex justify-content-center m-4">
        <Row className="d-flex flex-column">
          {_.size(linksArray) === 0 ? (
            <div>
              <br />
              <h3>Do you want to add first link here?</h3>
            </div>
          ) : (
            _.map(newLinksArray()[selectedPage], (link, index) => (
              <ListLink
                key={index}
                linkID={link.id}
                linkName={link.linkName}
                linkURL={link.linkURL}
                linkPoints={link.points}
                linkVoteCounter={link.voteCounter}
                upVote={linkID => upVote(linkID)}
                downVote={linkID => downVote(linkID)}
                removeLink={() => {
                  setShowModal({
                    status: true,
                    name: link.linkName,
                    id: link.id
                  });
                }}
              />
            ))
          )}
        </Row>
      </Row>
      <Row className="d-flex justify-content-center m-4">
        <Pagination>{items}</Pagination>
      </Row>
      <RemoveModal
        showModal={showModal}
        handleModal={handleModal}
        removeLink={linkID => removeLink(linkID)}
      />
      <ToastWarn
        showToast={showToast}
        handleToast={() => handleToast()}
        toastType="remove"
      />
    </div>
  );
}

export default ListLinkPage;
