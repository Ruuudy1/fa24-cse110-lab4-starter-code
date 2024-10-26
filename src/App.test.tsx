import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import AddExpenseForm from './components/Expense/AddExpenseForm';
import { AppProvider } from '../src/context/AppContext';  // Updated path
import ExpenseItem from './components/Expense/ExpenseItem';

test('renders the main App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/My Budget Planner/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders AddExpenseForm component', () => {
  render(<AddExpenseForm />);
  const nameLabel = screen.getByLabelText(/Name/i);
  expect(nameLabel).toBeInTheDocument();
});

test('renders AppContext component', () => {
  render(
    <AppProvider>
      <AddExpenseForm />
      {/* other components that rely on AppContext can go here */}
    </AppProvider>
  );
  const nameLabel = screen.getByLabelText(/Name/i);
  expect(nameLabel).toBeInTheDocument();
});
