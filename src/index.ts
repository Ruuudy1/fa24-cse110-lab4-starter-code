import { Response } from "express";
import initDB from "./createTable";
import { createExpenseEndpoints } from "./expenses/expense-endpoints";
import { createBudgetEndpoints } from "./budget/budget-endpoints";
import { budget } from "./constants";

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

(async () => {
  const db = await initDB();

  app.get("/", (res: Response) => {
    res.send({ "data": "Hello, TypeScript Express!" });
    res.status(200);
  });

  createExpenseEndpoints(app, db);
  createBudgetEndpoints(app, budget);
})();
