import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const beforeEach = () => {
  console.log("beforeEach");
};
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
const buttonWasNotClicked = () => {
  test("renders 'good to see you' if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
};
const buttonWasClickedShowChanged = () => {
  test("renders 'Changed' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElements = screen.getByRole("button");
    userEvent.click(buttonElements);
    //Assert
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
};
const buttonWasClickedHiddenGoodSeeYou = () => {
  test("dose not renders 'Good See You'! if the button was clicked", () => {
    //Arrange

    //Act
    const buttonElements = screen.getByRole("button");
    userEvent.click(buttonElements);
    //Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).not.toBeInTheDocument();
  });
};

describe("Greeting components", () => {
  beforeEach();
  rendersHelloWorldAsAText();
  buttonWasNotClicked();
  buttonWasClickedShowChanged();
  buttonWasClickedHiddenGoodSeeYou();
});
