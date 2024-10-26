import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "./AppContext";
import AddExpenseForm from "../components/Expense/AddExpenseForm";
import Remaining from "../components/Remaining";
import ExpenseTotal from "../components/Expense/ExpenseTotal";

test("should verify budget balance equation holds true", () => {
  render(
    <AppProvider>
      <AddExpenseForm />
      <Remaining />
      <ExpenseTotal />
    </AppProvider>
  );

  const budgetAmount = 1000;
  const testExpenses = [
    { name: "Groceries", cost: 100 },
    { name: "Transport", cost: 50 },
  ];

  // Add expenses
  testExpenses.forEach((expense) => {
    const nameInput = screen.getByLabelText(/Name/i);
    const costInput = screen.getByLabelText(/Cost/i);
    const saveButton = screen.getByRole("button", { name: /save/i });

    fireEvent.change(nameInput, { target: { value: expense.name } });
    fireEvent.change(costInput, { target: { value: expense.cost } });
    fireEvent.click(saveButton);
  });

  // Verify equation holds
  const remaining = budgetAmount - testExpenses.reduce((a, b) => a + b.cost, 0);
  expect(screen.getByText(/Remaining Balance/i)).toHaveTextContent(remaining.toString());
});
