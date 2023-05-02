const coffeeMenu = require("./coffee_data.js")

console.log(coffeeMenu)

//grabs the names of the coffee and maps it into a new array
function coffeeName(menuItem) {
    return menuItem.name;
}

console.log(coffeeMenu.map(coffeeName))

//checks for prices equal to or less than 5
function underFive(coffeePrice) {
        return coffeePrice.price <= 5;
}

console.log(coffeeMenu.filter(underFive));

//checks for prices with an even number
function evenPrice(coffeePrice) {
    return coffeePrice.price % 2 == 0;
}

console.log(coffeeMenu.filter(evenPrice))

//brings out the prices of the objects and maps to new array to use
function coffeePrice(prices) {
    return prices.price;
}

const itemPrice = coffeeMenu.map(coffeePrice);

function totalSum(total, currentElement) {
    return currentElement += total;
}

console.log(itemPrice.reduce(totalSum));

//checks for whether the drink is seasonal and maps to new array
function seasonalDrink(seasonal){
    return seasonal.seasonal == true
}

const seasonalBeer = coffeeMenu.filter(seasonalDrink)
console.log(seasonalBeer)

//prints seasonal drinks with "with imported beans"
const seasonalBeans = seasonalBeer.map(coffeeName);

seasonalBeans.forEach((currElement) => {
    console.log(currElement, "with imported beans")
});