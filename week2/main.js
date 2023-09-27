/*
check the allow input checkbox
if true
    display the input form

get any existing expenses from localstorage
render expenses

when the "Enter" button is clicked: (addEventListener)
    get the stuff out of the input form
    format stuff
    insert stuff into list of expenses
    update localstorage
    update total spent
    rerender expense list
*/

import { renderExpenseList } from "./expenseTracker.mjs";

const allowCheck = document.querySelector("#allowInput");
console.dir(allowCheck);

function toggleInputForm() {
  const inputForm = document.querySelector("#input");
  if (allowCheck.checked) {
    inputForm.classList.remove("hide");
  } else {
    inputForm.classList.add("hide");
  }
}

toggleInputForm();
renderExpenseList();

allowCheck.addEventListener("click", toggleInputForm);
