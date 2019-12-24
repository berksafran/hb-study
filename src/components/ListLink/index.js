import React from "react";
import { Button } from "react-bootstrap";
import {
  LinkListContainer,
  LinkDetail,
  LinkDetailNameAndURL,
  LinkDetailVoteButtons
} from "./style";
import { MdRemoveCircle } from "react-icons/md";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import PropTypes from 'prop-types';

function ListLink(props) {
  const {linkName, linkURL, linkPoints, linkID} = props;
  return (
    <LinkListContainer id={linkName}>
      <Button
        variant="outline-secondary"
        size="large"
      >
        <p className="points">{linkPoints}</p>
        <p className="pointsText">POINTS</p>
      </Button>
      <LinkDetail>
        <LinkDetailNameAndURL>
          <p id="linkName">{linkName}</p>
          <small id="linkURL">({linkURL})</small>
        </LinkDetailNameAndURL>
        <LinkDetailVoteButtons>
          <div id="upVote" onClick={() => props.upVote(linkID)}>
            <FaArrowUp />
            <p>Up Vote</p>
          </div>
          <div id="downVote" onClick={() => props.downVote(linkID)}>
            <FaArrowDown />
            <p>Down Vote</p>
          </div>
        </LinkDetailVoteButtons>
      </LinkDetail>
      <div className="removeItem" onClick={() => props.removeLink(linkID)}>
        <MdRemoveCircle className="removeItemIcon" />
      </div>
    </LinkListContainer>
  );
}

ListLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
  linkPoints: PropTypes.number.isRequired,
  linkID: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  removeLink: PropTypes.func.isRequired,
};

export default ListLink;


