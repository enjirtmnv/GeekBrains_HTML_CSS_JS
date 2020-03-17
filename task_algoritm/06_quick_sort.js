//Быстрая сортировка через for (опорный - первый элемент)
function quickSort(arr) {
    if (arr.length === 0){
        return [];
    }

    var less = [];
    var greater = [];
    var pivot = arr[0];

    for(let i = 1; i < arr.length; i++){
        if (arr[i] < pivot){
            less[less.length] = arr[i];
        } else {
            greater[greater.length] = arr[i];
        }
        var ggg = 3;
    }
    return quickSort(less).concat(pivot, quickSort(greater));
}

let myArr = [2,55,677,1,-98,34,76,1343,560,88,13,-7];

console.log(quickSort(myArr));




//Быстрая сортировка через forEach (опорный - первый элемент)
function quickSort2(arr) {
    if (arr.length === 0){
        return [];
    }

    var less = [];
    var greater = [];
    var pivot = arr[0];

    arr.shift();

    arr.forEach(function (item){
        if (item < pivot){
            less[less.length] = item;
        } else {
            greater[greater.length] = item;
        }
    });

    return quickSort(less).concat(pivot, quickSort(greater));
}

myArr2 = [2,55,677,1,-98,34,76,1343,560,88,13,-7];

console.log(quickSort2(myArr2));



//Быстрая сортировка каждого элемента массива
function quickSort3(arr) {
    for (let i = 0; i < arr.length; i++){
            console.log(arr[i]);
    }
}

myArr3 = [2,55,677,1,-98,34,76,1343,560,88,13,-7];

quickSort3(myArr3);




//Таблица умножения
function multiplicationTable(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            let result = arr[i] * arr[j];
            console.log(result);
        }
    }
}

arrMultiTable = [2 , 3, 7, 8, 10];

multiplicationTable(arrMultiTable);


