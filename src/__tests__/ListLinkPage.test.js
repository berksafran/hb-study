import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import ListLink from "../components/ListLink";

describe("Components in ListLinkPage test", () => {
  it("Open app in the first time", () => {
    const wrapper = mount(<App />);

    // check middle text at the first time and add link button
    expect(wrapper.find("h3").text()).toBe(
      "Do you want to add first link here?"
    );
    expect(wrapper.find('a[href="/addlink"]').text()).toBe("+");

    // check 'Order by' button
    expect(wrapper.find('button[id="orderbyButton"]')).toHaveLength(1);
  });

  test("ListLink component's props works", () => {
    const removeLinkFunc = jest.fn();
    const upVoteFunc = jest.fn();
    const downVoteFunc = jest.fn();

    const wrapper = shallow(
      <ListLink
        linkID={123132}
        linkName="Stackoverflow"
        linkURL="http://www.stackoverflow.com"
        linkPoints={20}
        removeLink={removeLinkFunc}
        upVote={upVoteFunc}
        downVote={downVoteFunc}
      />
    );

    // check ListLink component works
    expect(wrapper.find("#Stackoverflow")).toHaveLength(1);
    expect(wrapper.find(".points").text()).toEqual("20");
    expect(wrapper.find("#linkName").text()).toEqual("Stackoverflow");
    expect(wrapper.find("#linkURL").text()).toEqual(
      "(http://www.stackoverflow.com)"
    );

    // check Upvote and Downvote ListLink component
    expect(wrapper.find("#upVote")).toHaveLength(1);
    expect(wrapper.find("#downVote")).toHaveLength(1);

    // click upvote and downvote
    wrapper
      .find("#upVote")
      .at(0)
      .simulate("click");
    expect(upVoteFunc).toHaveBeenCalledTimes(1);

    wrapper
      .find("#downVote")
      .at(0)
      .simulate("click");
    expect(upVoteFunc).toHaveBeenCalledTimes(1);

    // check remove link button and click it
      expect(wrapper.find('.removeItem')).toHaveLength(1);
      wrapper.find('.removeItem').simulate('click');

      expect(removeLinkFunc).toHaveBeenCalled();
      expect(removeLinkFunc).toHaveBeenCalledTimes(1);

  });
});
