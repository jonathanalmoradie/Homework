/* eslint-disable prettier/prettier */
const pizzaPlace = "Jonny's Pizzeria";
let numberOfToppings = 10;

console.log(pizzaPlace, typeof pizzaPlace, numberOfToppings, typeof numberOfToppings)

console.log(`At ${pizzaPlace}, we have ${numberOfToppings} toppings.`)

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.")
}

//Bonus Challenge:
for (let i = 1; i <= numberOfToppings; i++){
  if (i % 2 === 0) {
    console.log(i)
  }
}
