import { createContext, useState } from "react";
import { Expense } from "../types/types";

interface AppContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  budget: number; // Add budget
  setBudget: React.Dispatch<React.SetStateAction<number>>; // Add setBudget
}

const initialState: AppContextType = {
  expenses: [],
  setExpenses: () => {},
  budget: 1000, // Default budget value; you can set it to any starting amount
  setBudget: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);
  const [budget, setBudget] = useState<number>(initialState.budget);

  return (
    <AppContext.Provider
      value={{
        expenses,
        setExpenses,
        budget, // Add budget to context provider
        setBudget, // Add setBudget to context provider
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
