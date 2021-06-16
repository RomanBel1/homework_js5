// Задание 1

let result = function(a, b, c) {
    return (a - b) / c
}
console.log(result(15, 2, 10));

// Задание 2

let square = function(d) {
    return d * d;

}
console.log(square(5));

let cub = function(d) {
    return d * d * d;

}
console.log(cub(5));

// Задание 3

function MinMax(a, b) {
    return a > b ? a : b;
}
console.log(MinMax(10, 5));

// Задание 4

/*let array = [],
    f;

function myArr(array) {
    for (;;) {
        f = +prompt('Введите число');
        if (f == "") {
            break;
        }
        if (!isNaN(f)) {
            array.push(f);
        }
    }
    return array;
}
console.log(myArr(array));
*/


// Задание 5

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10));

// Задание 6

function firstArr(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i]) == true) {
            newArr.push(array[i])
        }
    }
    return newArr;
}
let ar = firstArr([10, 8, 3, 11, 212, 33]);
console.log(ar)

// Задание 7
/*function pyramid(s) {
    for (let i = 1; i <= s; i++) {
        for (let k = 1; k <= s; k++) {

        }
        for (let j = 0; j < i; j++) {
            arguments[1] == undefined ? document.write(`${i}`) : document.write(`${arguments[1]}`);
        }
        document.write('<br>');
    }
};
pyramid(6, "1");
*/

// Задание 8

let g = +prompt('Введите число')

function pyramidTr(g) {
    for (let i = 1; i <= g; i++) {

        for (let l = 1; l <= g - i; l++) {
            document.write(`&ensp;`);
        }
        for (let j = 0; j < i * 2 - 1; j++) {
            document.write('*');
        }
        document.write('<br>')
    }
}
pyramidTr(g);