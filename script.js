let memoryValue = 0;
let memoryStored = false;

function addToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function convertToMemory() {
  const display = document.getElementById("display");
  const currentValue = display.value;

  if (!isNaN(currentValue)) {
    memoryValue += parseFloat(currentValue);
    memoryStored = true;
  }
}

function convertFromMemory() {
  const display = document.getElementById("display");
  if (memoryStored) {
    display.value = memoryValue;
  }
}

function convertLength() {
  const display = document.getElementById("display");
  const length = parseFloat(display.value);

  const unitSelect = document.getElementById("unit");
  const selectedUnit = unitSelect.value;

  switch (selectedUnit) {
    case "cm":
      display.value = length * 100;
      break;
    case "km":
      display.value = length / 1000;
      break;
    case "mm":
      display.value = length * 1000;
      break;
    default:
      display.value = "Invalid unit";
  }
}
