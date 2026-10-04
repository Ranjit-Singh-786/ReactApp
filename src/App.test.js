import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the student form', () => {
  render(<App />);
  expect(screen.getByText('Student Basic Information')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Roll Number')).toBeInTheDocument();
});
