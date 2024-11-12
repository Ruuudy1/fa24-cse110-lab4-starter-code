// src/budget/budget-endpoints.ts
import { DEFAULT_BUDGET_LIMIT } from '../constants';

let budgetLimit = DEFAULT_BUDGET_LIMIT;

export function setBudgetLimit(limit: number) {
    budgetLimit = limit;
}

export function getBudgetLimit() {
    return budgetLimit;
}

export function isWithinBudget(amount: number) {
    return amount <= budgetLimit;
}
