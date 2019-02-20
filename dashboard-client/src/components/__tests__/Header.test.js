import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

import Header from "../Header";
import Root from "../../Root";

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Root>
  );
});

it("has a navbar component", () => {
  expect(component.find("Navbar").length).toEqual(1);
});

it("has a hamburger menu", () => {
  expect(component.find("HamburgerMenu").length).toEqual(1);
});

it("has a slider menu", () => {
  expect(component.find("SliderMenu").length).toEqual(1);
});

it("has a slider menu that opens and closes", () => {
  component.find("HamburgerMenu").simulate("click");
  expect(component.find("SliderMenu").props().isOpen).toEqual(true);

  component.find("HamburgerMenu").simulate("click");
  expect(component.find("SliderMenu").props().isOpen).toEqual(false);
});
