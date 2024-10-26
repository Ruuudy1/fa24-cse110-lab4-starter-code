import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

interface ExpenseItemProps {
  id: string;
  name: string;
  cost: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ id, name, cost }) => {
  const { expenses, setExpenses } = useContext(AppContext);

  const handleDeleteExpense = () => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <li className="list-group-item">
      {name} <span>${cost}</span>
      <button onClick={handleDeleteExpense}>X</button>
    </li>
  );
};

export default ExpenseItem;
