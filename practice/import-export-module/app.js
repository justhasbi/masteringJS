import { coffeeStock, isCoffeeMakerReady } from "./state.js";
 
 
const displayStock = stock => {
 const coffeeStockListElement = document.querySelector("#coffee-stock-list");
 for (const type in stock) {
   const coffeeStockItemElement = document.createElement("li");
   coffeeStockItemElement.innerText = `${type}: ${stock[type]}`;
   coffeeStockListElement.appendChild(coffeeStockItemElement);
 }
}
 
 
const coffeeOrder = (type, miligrams) => {
 return new Promise((resolve, reject) => {
   if (isCoffeeMakerReady) {
     if (coffeeStock[type] >= miligrams) {
       resolve("Kopi berhasil dipesan!");
     } else {
       reject("Maaf Stock kopi habis!")
     }
   } else {
     reject("Maaf mesin sedang rusak!")
   }
 })
}
 
 
const coffeeOrderButtonEventHandler = async event => {
 const type = prompt("Kopi apa yang ingin dipesan?");
 const miligrams = prompt("Berapa miligrams?");
 try {
   const result = await coffeeOrder(type, miligrams);
   alert(result);
 } catch (rejectionReason) {
   alert(rejectionReason);
 }
}
 
 
const coffeeOrderButtonElement = document.querySelector("#coffee-order-button");
coffeeOrderButtonElement.addEventListener("click", coffeeOrderButtonEventHandler)
 
 
displayStock(coffeeStock);