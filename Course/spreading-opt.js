

// SPREADING OPERATOR - Menggunakan titik tiga (....)

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites);
console.log(...favorites);

// output ---
// [ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
// Seafood Salad Nugget Soup


const otherFav = ["Pie", "Pancake"];

const AllFav = [favorites, otherFav];

console.log(AllFav);

const AllFav = [...favorites, ...otherFav];
console.log(AllFav);


// REST PARAMS

/*

Jika spread operator adalah pelebur array menjadi beberapa elemen yang berbeda, 
rest parameter ini adalah kebalikan dari operator tersebut.
Rest parameter juga dituliskan menggunakan three consecutive dots (...). 
Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. 
Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah variadic function.

*/


function sum(...numbers) {
    var result = 0;

    for(let num of numbers) {
        result =+ num
    }
    return result;
}

console.log(sum(1,3,5,7,4));
// output = 20

// dapat digunakan dalam array destructuring

const refrigerator = ["Sharp", 50, 2, "salad", "vegetables", "egg", "milk"];

const [manufacture, weight, door, ...items] = refrigerator;
console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);
/* output

Sharp
50
2
[ 'salad', 'vegetables', 'egg', 'milk' ]

*/


