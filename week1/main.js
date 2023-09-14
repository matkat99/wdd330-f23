// function1();

// function declaration
function function1() {
  console.log("function1");
}

// function expression
const function2 = function (callback) {
  console.log("function2");
  // do some stuff
  // run callback
  callback();
};

function2(function1);

// expression with arrow function
const double = (num) => {
  return num * 2;
};

const doubleShort = (num) => num * 2;
const baseUrl = "https://pokeapi.co/api/v2/type/";

async function getTypes() {
  const response = await fetch(baseUrl);
  console.log(response);
  const data = await response.json();
  console.log("data:", data);
  return data;
}

function typeTemplate(item) {
  return `<li>${item.name}</li>`;
}

async function builtTypeList() {
  const types = await getTypes();
  console.log("types:", types);
  const listEl = document.querySelector("#typeList");
  const html = types.results.map(typeTemplate);
  listEl.innerHTML = html.join("");
}

builtTypeList();
