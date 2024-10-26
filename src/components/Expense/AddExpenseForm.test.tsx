// src/components/Expense/AddExpenseForm.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "../../context/AppContext";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseTotal from "./ExpenseTotal";

test("should add a new expense and update total expenses", () => {
  render(
    <AppProvider>
      <AddExpenseForm />
      <ExpenseList />
      <ExpenseTotal />
    </AppProvider>
  );

  const nameInput = screen.getByLabelText(/Name/i);
  const costInput = screen.getByLabelText(/Cost/i);
  const saveButton = screen.getByRole("button", { name: /save/i });

  // Simulate user input
  fireEvent.change(nameInput, { target: { value: "Groceries" } });
  fireEvent.change(costInput, { target: { value: 50 } });
  fireEvent.click(saveButton);

  // Use getAllByText to handle multiple elements with the same text content
  const expenses = screen.getAllByText(/\$50/i);
  expect(expenses[0]).toBeInTheDocument(); // The new expense item
  expect(screen.getByText(/Groceries/i)).toBeInTheDocument();
});
