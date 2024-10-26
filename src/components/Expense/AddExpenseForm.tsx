import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const AddExpenseForm: React.FC = () => {
  const { expenses, setExpenses } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || cost.trim() === '') return;

    const newExpense = {
      id: Math.random().toString(), // Generate a unique ID
      name,
      cost: parseFloat(cost),
    };

    setExpenses([...expenses, newExpense]);

    setName('');
    setCost('');
  };

  return (
    <form onSubmit={handleAddExpense}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddExpenseForm;
