import { render, screen } from "@testing-library/react";
import Async from "./Async";

const asyncRequestSucceeds = () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    //Arrange
    render(<Async />);
    //Act
    //...nothing
    //Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
};
const asyncRequestFail = () => {
  test("renders posts if request Fail", () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [],
    });

    //Arrange
    render(<Async />);
    //Act
    //...nothing
    //Assert
    const listItemElements = screen.queryByRole("listitem");
    expect(listItemElements).toBeNull();
  });
};

describe("Async Components Test", () => {
  asyncRequestSucceeds();
  asyncRequestFail();
});
