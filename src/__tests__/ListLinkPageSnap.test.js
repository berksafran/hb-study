import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import ListLink from "../components/ListLink/index";
import { upVote, downVote, removeLink } from "../pages/ListLinkPage";

describe("ListLinkPage snapshot", () => {
  test("Header component Snapshot", () => {
    const header_tree = renderer
      .create(
        <ListLink
          linkID={234234112}
          linkName="Amazon"
          linkURL="http://www.amazon.com"
          linkPoints={9999}
          upVote={() => upVote()}
          downVote={() => downVote()}
          removeLink={() => removeLink()}
        />
      )
      .toJSON();
    expect(header_tree).toMatchSnapshot();
  });

  test("ListLink component snapshot", () => {
    const wrapper = shallow(
      <ListLink
        linkID={12312312}
        linkName="Stackoverflow"
        linkURL="http://www.stackoverflow.com"
        linkPoints={232}
        upVote={() => upVote()}
        downVote={() => downVote()}
        removeLink={() => removeLink()}
      />
    );

    expect(wrapper.find(".points")).toHaveLength(1);
  });
});
