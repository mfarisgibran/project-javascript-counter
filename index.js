function incrementNumber() {
  const valueElement = document.getElementById("value");
  let value = Number(valueElement.innerText);

  value += 1;
  valueElement.innerText = value;
}

function decrementNumber() {
  const valueElement = document.getElementById("value");
  let value = Number(valueElement.innerText);

  value -= 1;
  valueElement.innerText = value;
}

const incrementButtonElement = document.getElementById("increment");
const decrementButtonElement = document.getElementById("decrement");

incrementButtonElement.addEventListener("click", incrementNumber);
decrementButtonElement.addEventListener("click", decrementNumber);
