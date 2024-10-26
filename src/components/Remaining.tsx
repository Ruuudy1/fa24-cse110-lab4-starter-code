import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.cost, 0);
  const remaining = budget - totalExpenses;

  useEffect(() => {
    if (remaining < 0) {
      alert("Warning: You have exceeded your budget!");
    }
  }, [remaining]);

  return (
    <div>
      <span>Remaining: ${remaining}</span>
    </div>
  );
};

export default Remaining;
