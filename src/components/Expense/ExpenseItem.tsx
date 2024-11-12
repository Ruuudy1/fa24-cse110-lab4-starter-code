import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

interface ExpenseItemProps {
  id: string;
  name: string;
  cost: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ id, name, cost }) => {
  const { expenses, setExpenses, budget, setBudget } = useContext(AppContext);

  // Delete the expense and update the Remaining and Spent so far values
  const handleDeleteExpense = () => {
    // Filter out the deleted expense from the list
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    
    // Update context with the new expenses list
    setExpenses(updatedExpenses);

    // Recalculate the total spent and adjust the budget correctly
    const totalSpent = updatedExpenses.reduce((acc, curr) => acc + curr.cost, 0);
    setBudget(1000 - totalSpent); // Reset budget to initial 1000 minus total spent
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name} <span>${cost}</span>
      <button className="btn btn-danger btn-sm" onClick={handleDeleteExpense}>
        X
      </button>
    </li>
  );
};

export default ExpenseItem;


