import { render, screen } from "@testing-library/react";
import Async from "./Async";

const asyncRequestSucceeds = () => {
  test("renders posts if request succeeds", async () => {
    //Arrange
    render(<Async />);
    //Act
    //...nothing
    //Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
};

describe("Async Components Test", () => {
  asyncRequestSucceeds();
});
