// Arrow Function Expression=> () {}

const uppercaseName = ["Hasbi", "Shuhada"].map(function(name){
        return name.toUpperCase();
    });

console.log(...uppercaseName);

// Using arrow function

const uppercaseName = ["Hasbi", "Shuhada"]
    .map(name => name.toUpperCase());

console.log(...uppercaseName);

/* 

Pada kasus fungsi yang dituliskan dalam satu baris dengan arrow function kita dapat 
menghapus kata function, tanda kurung, tanda kurawal, kata return, dan semicolon (;). 
Kita hanya perlu menambahkan tanda panah (=>) di antara parameter dan kode fungsinya.

*/



// function declaration
function sayHello(greet){
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`);
}

/* 

Karena arrow function merupakan sebuah expression, maka ia hanya dapat digunakan untuk disimpan 
pada variabel (seperti contoh kode di atas), sebagai argumen pada sebuah fungsi, 
dan sebagai nilai dari properti objek.

*/

// function expression
const sayHello = greet => console.log(`${greet}`);
const sayName = name => console.log(`Nama saya ${name}`);


// beberapa penempatan arrow function

// stored in variable
const sayName = name => console.log(`Nama saya ${name}`);
// passed as an Argument
["Dimas", "Widdy", "Buchori"].forEach(name => console.log(`Nama Saya ${name}`));
// stored in object property
const user = {
    introduce: name => console.log(`Nama Saya ${name}`)
}

// BODY FUNCTION

const sayHello =  language => {
    if(language.toUpperCase() === "INDONESIA") {
        return "Selamat pagi!";
    } else {
        return "Good Morning";
    }
}

console.log(sayHello("indonesia"));