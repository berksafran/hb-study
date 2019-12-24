import React, { useState } from "react";
import { shallow, mount } from "enzyme";
import AddLinkPage from "../pages/AddLinkPage";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { AddLinkPageContainer } from "../pages/AddLinkPage/style";

describe("Components in AddLinkPage test", () => {
  it("Check all components in AddLinkPage", () => {
    const wrapper = mount(
      <Router>
        <AddLinkPage />
      </Router>
    );

    // check page title in header
    expect(wrapper.find(".title").text()).toEqual("Add New Link");

    // check Link Name label and textbox
    expect(
      wrapper
        .find('label[className="inputLabel form-label"]')
        .at(0)
        .text()
    ).toEqual("Link Name:");
    expect(wrapper.find('input[id="linkName"]').prop("placeholder")).toEqual(
      "e.g. Alphabet"
    );

    // check Link URL label and textbox
    expect(
      wrapper
        .find('label[className="inputLabel form-label"]')
        .at(0)
        .text()
    ).toEqual("Link Name:");

    expect(wrapper.find('input[id="linkURL"]').prop("placeholder")).toEqual(
      "e.g. http://abc.xyz"
    );

    // check ADD button
    expect(wrapper.find('button[type="submit"]').text()).toEqual("ADD");

    expect(
      wrapper.find('button[type="submit"]').hasClass("submitButton")
    ).toEqual(true);
  });
});
