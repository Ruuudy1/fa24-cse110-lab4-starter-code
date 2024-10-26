import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "../../context/AppContext";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";
import ExpenseTotal from "./ExpenseTotal";

test("should delete an expense and update total expenses", () => {
  render(
    <AppProvider>
      <ExpenseList />
      <ExpenseTotal />
    </AppProvider>
  );

  // Pre-populate with a test expense
  const testExpense = { id: "1", name: "Rent", cost: 1000 };
  fireEvent.click(screen.getByRole("button", { name: /add expense/i })); // Add expense

  // Confirm the expense is in the list
  expect(screen.getByText(/Rent/i)).toBeInTheDocument();
  expect(screen.getByText(/\$1000/i)).toBeInTheDocument();

  // Delete expense and verify update
  fireEvent.click(screen.getByRole("button", { name: /delete/i }));
  expect(screen.queryByText(/Rent/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Total Expenses/i)).toHaveTextContent("0");
});
