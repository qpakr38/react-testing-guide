import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

const rendersHelloWorldAsAText = () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
};

describe("Greeting components", () => {
  rendersHelloWorldAsAText();
});
