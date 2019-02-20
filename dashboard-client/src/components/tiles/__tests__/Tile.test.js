import React from "react";
import { mount, shallow } from "enzyme";
import { createMemoryHistory } from "history";

import Tile from "../Tile";
import Root from "../../../Root";

let component;
beforeEach(() => {
  component = shallow(
    <Tile name={"test name"} description={"test description"} />
  );
});

it("displays device name", () => {
  expect(component.find("h2").props().children).toEqual("test name");
});

it("displays device description", () => {
  expect(component.find("p").props().children).toEqual("test description");
});

it("transitions to tile detail page on tile-click", () => {
  const history = createMemoryHistory("/");
  component = mount(
    <Root>
      <Tile history={history} deviceID={"device1"} topic={"TEST_TOPIC"} />
    </Root>
  );

  component.find("#tile").simulate("click");
  const topic = component.props().children.props.topic;
  const deviceID = component.props().children.props.deviceID;

  expect(component.props().children.props.history.location.pathname).toEqual(
    `/tileDetailPage/${topic}/${deviceID}`
  );

  component.unmount();
});
