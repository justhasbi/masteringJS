// Object
const profile = [
    {
        "id": 14, 
        "title": "Menjadi Developer Android Expert",
        "author": "Google ATP"
    },

    {
        "id": 51, 
        "title": "Pemrograman Web Dasar",
        "author": "Google ATP"
    },

    {
        "id": 72, 
        "title": "Membangun Progresive Web App",
        "author": "Codepolitan"
    },

    {
        "id": 100, 
        "title": "Fundamental Front-End",
        "author": "Google ATP"
    }

]

// Array
const foods = ['Pie', 'Pancake', 'Honey'];

const foods1 = foods[0];
const foods2 = foods[1];
const foods3 = foods[2];

console.log(foods1, foods2, foods3);

// ----------------
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// ----------------------
// memindah menukar nilai variabel dengan destructuring array
let a = 1;
let b= 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);