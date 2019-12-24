import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import App from "../App";
import AddLinkPage from "../pages/AddLinkPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Components in AddLinkPage test", () => {
  test("Header component Snapshot", () => {
    const header_tree = renderer
      .create(
        <Router>
          <AddLinkPage />
        </Router>
      )
      .toJSON();
    expect(header_tree).toMatchSnapshot();
  });
});
