const number = document.getElementById('number');

const button = document.getElementById('convert-btn');

const output = document.getElementById("output");

const check = () => {
  const parseNumber = parseInt(number.value);
  if(!number.value){
    output.textContent = "Please enter a valid number"
  } else if(parseNumber > 3999){
    output.textContent = "Please enter a number less than or equal to 3999";
  } else if(parseNumber < 1){
    output.textContent = "Please enter a number greater than or equal to 1";
  } else {
    output.textContent = convert(parseNumber);
  }
}

const romanVals = [
  {
    number: 1000,
    symbol: "M"
  },
  {
    number: 900,
    symbol: "CM"
  },
  {
    number: 500,
    symbol: "D"
  },
  {
    number: 400,
    symbol: "CD"
  },
  {
    number: 100,
    symbol: "C"
  },
  {
    number: 90,
    symbol: "XC"
  },
  {
    number: 50,
    symbol: "L"
  },
  {
    number: 40,
    symbol: "XL"
  },
  {
    number: 10,
    symbol: "X"
  },
  {
    number: 9,
    symbol: "IX"
  },
  {
    number: 5,
    symbol: "V"
  },
  {
    number: 4,
    symbol: "IV"
  },
  {
    number: 1,
    symbol: "I"
  },
]
const convert = (num) => {
  let roman = "";
  let i = 0;
  while(i < romanVals.length) {
    if(num >= romanVals[i].number){
      roman += romanVals[i].symbol;
      num -= romanVals[i].number;
    } else i++;
  }
  return roman;
}

// Must be after function that is called
button.addEventListener("click", check);

