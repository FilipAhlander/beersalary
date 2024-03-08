const val = document.getElementById('salary');
const result = document.getElementById('result');

const calculate = (event) => {
  const value = Number(event.target.value);
  if (isNaN(value)) return;

  const [beerCost, energyDrinkCost] = [11.9, 17];

  const beerAmount = Math.floor(value / beerCost);
  const energyDrinks = Math.floor(beerAmount * (1 / energyDrinkCost));
  
  const text = `Du kan för din lön köpa ${beerAmount} öl och för panten får du ${energyDrinks} stycken red bull`;
  const field = document.getElementById('result');
  field.innerText = text;
} 

val.addEventListener("change", calculate);