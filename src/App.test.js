import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();

test("renders app title element", () => {
  render(<App />);
  const titleElement = screen.getByText(/Hello Radixweb/i);
  expect(titleElement).toBeInTheDocument();
});
