/* eslint-disable prettier/prettier */

// Pizza Place Functions

// #1
//Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ['pepperoni', 'sausage', 'mushrooms', 'bell peppers'];


// #2
// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

const greetCustomer = () => {
  let greeting = 'Welcome to Pizza House, our toppings are: ';
  for (let topping of pizzaToppings) {
    if (topping === pizzaToppings[pizzaToppings.length-1]) { // Bonus challenge #1
      greeting += `and ${topping}.`;
    } else {
      greeting += `${topping}, `;
    }
  }
  console.log(greeting);
};



// #3
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings


const compareToppings = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

const getPizzaOrder = (size, crust, ...toppings) => {
  let pizzaOrder = `One ${size} ${crust} pizza with `;
  let orderArr = [size, crust, toppings];

  if (toppings.length === 0) { // Bonus challenge #2
    pizzaOrder += "cheese coming right up!";
  } else if (compareToppings(toppings, pizzaToppings)){ // Bonus challenge #3
    for (let topping of toppings) {
      if (topping === toppings[toppings.length-1]) { // Bonus challenge #1
        pizzaOrder += `and ${topping} coming right up!`;
      } else {
        pizzaOrder += `${topping}, `;
      }
    }
  } else {
    pizzaOrder = "Sorry, we don't offer some of your toppings. Please order again!"; // Bonus challenge #3 output
  }

  console.log(pizzaOrder);
  return orderArr;
};




// #4
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

const preparePizza = (arr) => {
  let action = '...Cooking pizza...';
  let pizza = {
    size: arr[0],
    crust: arr[1],
    toppings: arr[2]
  };

  if (compareToppings(arr[2], pizzaToppings)){ // Bonus challenge #3 check
    console.log(action);
    return pizza;
  } else if (pizza.toppings.length === 0) { // Bonus challenge #2
    console.log(action);
    return pizza;
  } else { // Bonus challenge #3 output if false
    action = '';
    console.log(action);
    return pizza;
  };

};


// #5
// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

const servePizza = (pizzaObj) => {
  let orderUp = `Order up! Here's your ${pizzaObj.size} ${pizzaObj.crust} pizza with `;

  if (pizzaObj.toppings.length === 0){ // Bonus challenge #2
    orderUp += "cheese. Enjoy!";
  } else if (compareToppings(pizzaObj.toppings, pizzaToppings)){ // Bonus challenge #3 check
    for (let topping of pizzaObj.toppings) {
      if (topping === pizzaObj.toppings[pizzaObj.toppings.length-1]) {
        orderUp += `and ${topping}. Enjoy!`;
      } else {
        orderUp += `${topping}, `;
      }
    }
  } else { // Bonus challenge #3 output if false
    orderUp = '';
  }

  console.log(orderUp);
  return pizzaObj;
}

// #6
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();

let customerOrder = getPizzaOrder('large', 'thin crust', 'pepperoni', 'sausage', 'mushrooms', 'bell peppers');

// Bonus challenge #2
// let customerOrder = getPizzaOrder('small', 'pan'); // with no toppings

// Bonus challenge #3
// let customerOrder = getPizzaOrder('large', 'thin crust', 'pepperoni', 'sausage', 'mushrooms', 'banana peppers');

servePizza(preparePizza(customerOrder));



// An example output for this assignment is:
// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!


// Bonus Challenge

// #1
// Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

// #2
// In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.

// #3
// In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
