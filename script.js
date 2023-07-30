let input = document.getElementById("input1");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");
let del = document.getElementById("del");

let operator = null;
let operand1 = null;

one.addEventListener("click", () => {
  input.value += "1";
});

two.addEventListener("click", () => {
  input.value += "2";
});

three.addEventListener("click", () => {
  input.value += "3";
});

four.addEventListener("click", () => {
  input.value += "4";
});

five.addEventListener("click", () => {
  input.value += "5";
});

six.addEventListener("click", () => {
  input.value += "6";
});

seven.addEventListener("click", () => {
  input.value += "7";
});

eight.addEventListener("click", () => {
  input.value += "8";
});

nine.addEventListener("click", () => {
  input.value += "9";
});

zero.addEventListener("click", () => {
  input.value += "0";
});

plus.addEventListener("click", () => {
  operator = "+";
  operand1 = parseInt(input.value);
  input.value = "";
});

minus.addEventListener("click", () => {
  operator = "-";
  operand1 = parseInt(input.value);
  input.value = "";
});

mul.addEventListener("click", () => {
  operator = "*";
  operand1 = parseInt(input.value);
  input.value = "";
});

divide.addEventListener("click", () => {
  operator = "/";
  operand1 = parseInt(input.value);
  input.value = "";
});

equal.addEventListener("click", () => {
  const operand2 = parseInt(input.value);
  switch (operator) {
    case "+":
      input.value = operand1 + operand2;
      break;
    case "-":
      input.value = operand1 - operand2;
      break;
    case "*":
      input.value = operand1 * operand2;
      break;
    case "/":
      input.value = operand1 / operand2;
      break;
    default:
      input.value = "Error";
      break;
  }
});

del.addEventListener("click", () => {
  input.value = "";
});
