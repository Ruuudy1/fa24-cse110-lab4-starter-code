import React, { createContext, useState, useEffect } from "react";
import { Expense } from "../types/types";
import { fetchExpenses } from "../utils/expense-utils"; // Make sure this is correctly imported

interface AppContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
}

// Initial context values
const initialState: AppContextType = {
  expenses: [],
  setExpenses: () => {},
  budget: 1000,
  setBudget: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budget, setBudget] = useState<number>(initialState.budget);

  // Fetch expenses on initial load
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const expensesData = await fetchExpenses();
        setExpenses(expensesData);
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };

    loadExpenses();
  }, []);

  return (
    <AppContext.Provider
      value={{
        expenses,
        setExpenses,
        budget,
        setBudget,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
