/* eslint-disable radix */
/* eslint-disable no-shadow */
let input = 0;
const parseIntConverter = (inputValue, base) => parseInt(inputValue, base);
const toStringConverter = (inputValue, base) => inputValue.toString(base);
function welcomeFunction(inputType, outputType, inputVal) {
  let outputValue = 0;
  let inputValue = inputVal;
  if (inputType === 'binary' && outputType === 'decimal') {
    inputValue = parseInt(inputValue);
    outputValue = parseIntConverter(inputValue, 2);
  } else if (inputType === 'binary' && outputType === 'hex') {
    inputValue = parseInt(inputValue);
    outputValue = parseIntConverter(inputValue, 2);
    outputValue = toStringConverter(outputValue, 16).toUpperCase();
    outputValue = outputValue.length === 1 ? `0${outputValue}` : outputValue;
  } else if (inputType === 'binary' && outputType === 'octal') {
    inputValue = parseInt(inputValue);
    outputValue = parseIntConverter(inputValue, 2);
    outputValue = toStringConverter(outputValue, 8).toUpperCase();
  } else if (inputType === 'decimal' && outputType === 'binary') {
    inputValue = parseInt(inputValue);
    outputValue = toStringConverter(inputValue, 2);
  } else if (inputType === 'decimal' && outputType === 'hex') {
    inputValue = parseInt(inputValue);
    outputValue = toStringConverter(inputValue, 16);
    outputValue = outputValue.length === 1 ? `0${outputValue}` : outputValue;
  } else if (inputType === 'decimal' && outputType === 'octal') {
    inputValue = parseInt(inputValue);
    outputValue = toStringConverter(inputValue, 8);
  } else if (inputType === 'hex' && outputType === 'binary') {
    inputValue = parseInt(inputValue);
    outputValue = toStringConverter(inputValue, 2);
  } else if (inputType === 'hex' && outputType === 'decimal') {
    inputValue = parseInt(inputValue);
    outputValue = toStringConverter(inputValue, 10);
  } else if (inputType === 'hex' && outputType === 'octal') {
    inputValue = parseInt(inputValue);
    outputValue = toStringConverter(inputValue, 8);
  } else if (inputType === 'octal' && outputType === 'binary') {
    const decimalValue = parseIntConverter(inputValue, 8);
    outputValue = toStringConverter(decimalValue, 2);
  } else if (inputType === 'octal' && outputType === 'decimal') {
    outputValue = parseIntConverter(inputValue, 8);
  } else if (inputType === 'octal' && outputType === 'hex') {
    const decimalNumber = parseIntConverter(inputValue, 8);
    outputValue = toStringConverter(decimalNumber, 16);
    outputValue = outputValue.length === 1 ? `0${outputValue}` : outputValue;
  } else if (inputType === outputType) {
    outputValue = inputValue;
  }
  return outputValue;
}
window.addEventListener('load', () => {
  const inputValue = document.querySelector('.text-box');
  const inputBase = document.querySelector('#from');
  const outputBase = document.querySelector('#to');
  const outputVal = document.querySelector('.result');
  const button = document.querySelector('.button');
  const copybut=document.querySelector('.copy');
  let inputType = '';
  let outputType = '';
  inputValue.addEventListener('change', () => {
    input = inputValue.value;
  });
  inputBase.addEventListener('change', () => {
    inputType = inputBase.value;
  });
  outputBase.addEventListener('change', () => {
    outputType = outputBase.value;
  });
  button.addEventListener('click', () => {
    const res = welcomeFunction(inputType, outputType, input);
    outputVal.value = res;
  });
  copybut.addEventListener("click", () => {
    const copy = document.querySelector(".result");
    console.log("clicked:", copy.value);
    copy.focus();
    copy.select();
    document.execCommand("copy");
    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      console.log(`Copying text command was ${msg}`);
    } catch (err) {
      console.log("Oops, unable to copy");
    }
  });
});
