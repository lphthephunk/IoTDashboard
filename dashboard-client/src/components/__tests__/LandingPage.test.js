import React from "react";
import moxios from "moxios";
import { mount } from "enzyme";

import Root from "../../Root";
import LandingPage from "../LandingPage";

beforeEach(() => {
  moxios.install();

  const device1 = {
    name: "Device1",
    description: "Device description 1",
    deviceID: "1",
    history: "",
    topic: "WEATHER"
  };

  const device2 = {
    name: "Device2",
    description: "Device description 2",
    deviceID: "2",
    history: "",
    topic: "DOG_FEEDER"
  };
  moxios.stubRequest(
    "http://localhost:8080/deviceInitializer/listenForDevices",
    {
      status: 200,
      response: [device1, device2]
    }
  );
});

afterEach(() => {
  moxios.uninstall();
});

it("loads device tiles", () => {
  const component = mount(
    <Root>
      <LandingPage authenticated={true} />
    </Root>
  );

  moxios.wait(() => {
    expect(component.find("TileContainer").state().devices.length).toEqual(2);

    done();

    component.unmount();
  });
});
