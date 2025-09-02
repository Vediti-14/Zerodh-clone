import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../landing_page/home/Hero";
//import SignUp from "../landing_page/signup/SignUp";


// test suite (we can run multiple test cases)
describe("Hero component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });


  /*test("renders signup button ", () => {
    render(<SignUp />);
    const signupButton = screen.getByRole("button",{name:"/signup now/i"});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });*/

});
