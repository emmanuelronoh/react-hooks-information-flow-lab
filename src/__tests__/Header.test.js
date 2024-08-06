// src/__tests__/Header.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  render(<Header />);

  // Check if the button is in the document
  const buttonElement = screen.getByRole('button', { name: /toggle/i });
  expect(buttonElement).toBeInTheDocument();
});

