export async function createExpenseServer(req: Request, res: Response, db: Database) {
  const { id, cost, description } = req.body;

  if (!description || !id || !cost) {
    return res.status(400).send({ error: "Missing required fields" });
  }

  try {
    await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
    res.status(201).send({ id, description, cost });
  } catch (error) {
    return res.status(400).send({ error: `Expense could not be created, + ${error}` });
  }
}
export async function getExpenses(req: Request, res: Response, db: Database) {
  try {
    const expenses = await db.all('SELECT * FROM expenses');
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch expenses" });
  }
}
export async function deleteExpense(req: Request, res: Response, db: Database) {
  const { id } = req.params;

  try {
    const result = await db.run('DELETE FROM expenses WHERE id = ?', [id]);
    if (result.changes === 0) {
      return res.status(404).send({ error: "Expense not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: "Failed to delete expense" });
  }
}
