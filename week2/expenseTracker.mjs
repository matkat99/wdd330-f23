const expenses = [
  { description: "Item1", amount: "15" },
  { description: "Item2", amount: "10" }
];
let runningtotal = 0;

function expenseTemplate(expense) {
  runningtotal += new Number(expense.amount);
  return `<tr>
    <td>$${expense.description}</td>
    <td>$${expense.amount}</td>
    <td>$${runningtotal}</td>
  </tr>`;
}

export function renderExpenseList() {
  runningtotal = 0;
  const outputEl = document.querySelector(".outputBody");
  const html = expenses.map(expenseTemplate);
  outputEl.innerHTML = html.join("");
}
