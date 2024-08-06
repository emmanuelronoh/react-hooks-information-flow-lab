// src/__tests__/Filter.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element with options", () => {
  // Define some mock options
  const options = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'incomplete', label: 'Incomplete' }
  ];

  // Mock function to handle change events
  const handleChange = jest.fn();

  // Render the Filter component with options
  render(<Filter options={options} onChange={handleChange} />);

  // Check if the <select> element is in the document
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  // Check if the <select> element has the correct options
  options.forEach(option => {
    expect(screen.getByRole('option', { name: option.label })).toBeInTheDocument();
  });

  // Simulate a change event and check if the handler was called
  fireEvent.change(selectElement, { target: { value: 'completed' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
});
