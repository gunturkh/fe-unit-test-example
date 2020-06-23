import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    // expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("renders Input component", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders Button component", () => {
    render(<App />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("Test API Call", async () => {
    render(<App />);
    // Click button
    fireEvent.click(screen.getByText("Submit"));

    // Wait for page to update with query text
    // const items = await screen.getByText(/API is working properly/i);
    // console.log(items);
    // expect(items).toBeInTheDocument;
  });
});
