//Итеративный способ возведения в степень
function power(x,n) {
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= x
    }
    return result;
}

console.log(power(2, 6));

//Рекурсивный способ возведения в степень
const power2 = (x,n) => {
    if (n === 1){
        return x;
    } else {
        return x * power2(x, n - 1)
    }
};

console.log(power2(2, 5));

//Рекурсивный способ факториала, используя условный оператор ? вместо if

function power3(n){
    return ( n!==1 ) ? n * power3(n - 1) : 1; //Базисом рекурсии является значение 1
}

console.log(power3(5));


//Рекурсивные обходы
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

const sumSalaries = (department)  => {    //department - отдел
    if (Array.isArray(department)){
        return department.reduce((sum,current) => sum + current.salary, 0);
    } else {
        let result = 0;
        for (let subdep of Object.values(department)){
            result += sumSalaries(subdep);
        }
        return result;
    }
};

console.log(sumSalaries(company));


//Вычисление суммы чисел с использованиес цикла
function sumTo(n) {
    let resultSumTo = 0;
    for (let j = 1; j <= n ; j++){
        resultSumTo += j;
    }
    return resultSumTo;
}

console.log(sumTo(5));

//Вычисление суммы чисел через рекурсию
function sumTo2(n) {
    if ( n === 1){
        return 1
    } else {
        return (n + sumTo2(n - 1));
    }
}

console.log(sumTo2(5));

//Вычисление суммы чисел через арифмитическую прогрессию №1
const sumTo3 = n => {

    let arr = [];

    for (let k = 1; k <= n; k++){
        arr.push(k);
    }

    let l = arr.length;

    let resultArPr = ((arr[0] + arr[l - 1]) * l) / 2 ;

    return resultArPr;

};

console.log(sumTo3(5));

//Вычисление суммы чисел через арифмитическую прогрессию №2
function sumTo4(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo4(100));

//Числа Фибоначчи
function fib(n) {

    let arr = [1,1];

    for(let i = 1; i < n - 1; i++){
        let numFi = arr[i - 1] + arr[i];
        arr.push(numFi)
    }

    return arr[n - 1]
}


console.time('FirtsWay');
console.log(fib(77));
console.timeEnd('FirtsWay');



//Числа Фибоначчи через рекурсию
function fib2(n) {
    return n <= 1? n : fib(n - 1) + fib(n - 2);
}

console.time('FirtsWay');
console.log(fib2(77));
console.timeEnd('FirtsWay');


//Числа Фибоначчи через цикл
function fib3(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.time('FirtsWay');
console.log(fib3(77));
console.timeEnd('FirtsWay');

//Вывод односвязного списка через рекурсию в обратном порядке
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printList(linkedList) {

    if (linkedList.next){
        printList(linkedList.next);     //делаем то же самое для остальной части списка
    }
    console.log(linkedList.value + 'vo');   //выводим текущий элемент
}

printList(list); //способ с циклом более эффективный. В обеих реализациях делается то же самое, но для цикла не тратятся ресурсы для вложенных вызовов.
//С другой стороны, рекурсивный вариант более короткий и, возможно, более простой для понимания.


//Вывод односвязного списка через цикл

function printListCycle(list) {
    //Вариант с использованием цикла сложнее, чем в предыдущей задаче.
    // Нет способа сразу получить последнее значение в списке list. Мы также не можем «вернуться назад», к предыдущему элементу списка.
    // Поэтому мы можем сначала перебрать элементы в прямом порядке и запомнить их в массиве, а затем вывести то, что мы запомнили, в обратном порядке:

    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
       console.log( arr[i] );
    }

}

printListCycle(list);

//Фибоначчи повторение
function fibonacci(n){
    if (n <= 1){
        return n
    } else {
        return (fibonacci(n-1)+fibonacci(n-2))
    }
}

console.log(fibonacci(7));

// 0 1 2 3 4 5 6 7
// 0 1 1 2 3 5 8 13


//Сумма массива через рекурсию
function sumArray(arr) {
    let l = arr.length;
    let n = Math.floor(l/2);

    if (l === 0 ){
        return 0;
    } else if (l === 1){
        return arr[0];
    } else {
        return (sumArray(arr.slice(0,n)) + sumArray(arr.slice(n,l)));
    }
}
//6,112,38     +      -7,0,-132,11
//6  + 112,38         +      -7 0 + -132 11
//6 +

myArr = [6,112,38,-7,0,-132,11];
myArr2 = [];
myArr3 = [77];
console.log(sumArray(myArr));


//Факториал рекурсия проверка
function f(n) {
    if (n === 0){
        return 1;
    } else {
        return f(n-1) * n;
    }
}

console.log(f(5));


//Рекурсивная функция для подсчета элементов в списке

let listValue = {
    value: 1,
    next: {
        value: 4,
        next: {
            value: 30,
            next: {
                value: 2,
                next: null
            }
        }
    }
};

function myList(list) {

    if (list.next === null){
        return 1;
    } else {
       return myList(list.next) + 1;

    }

}

console.log(myList(listValue));

//Рекурсивная функция для подсчета cуммы элементов в списке

function sum(x, y) {
    return x+y;
}

function myList2(list) {

    if (list.next === null){
        return list.value;
    } else {
        return sum(myList2(list.next),list.value);
    }

}

console.log(myList2(listValue));

//Найти наибольшее число в списке;

function max(x, y) {
    return x > y ? x : y;
}

function myList3(list) {
    if (list.next === null){
        return list.value;
    } else {
        // return max(myList3(list.next),list.value);
        if (myList3(list.next) > list.value){
            return myList3(list.next)
        } else {
            return list.value;
        }
    }

}

console.log(myList3(listValue));

//Бинарный поиск
let myArr5 = [1,4,67,89,123,456,21,678,900];
function bin(arr,n) {
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] ===n){
            return i;
        }
    }
}

console.log(bin(myArr5, 21));