//Пузырьковая сортировка: два вложенных цикла

//Для реализации такой концепции нам нужны два указателя (два вложенных цикла).
// Каждый раз, когда мы выполняем итерацию, верхняя граница уменьшается на единицу,
// поскольку мы знаем, что этот элемент уже содержит отсортированное значение.
function bubble1(arr) {
    for (let j = arr.length - 1; j > 0; j--){
        for (let i = 0; i < j; i++){
            if (arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]=temp;
            }
        }
    }
    return arr;
}

let myArr = [4,5,1,10,-12,-234,2353,-2,76,-33,-1224,654,98,0,3];
console.time('FirtsWay');
console.log(bubble1(myArr));
console.timeEnd('FirtsWay');

let myArr3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.time('FirtsWay3');
console.log(bubble1(myArr3));
console.timeEnd('FirtsWay3');


//Пузырьковая сортировка: переменная с информацией об обмене

//Теперь нам нужен только один указатель, так как мы используем переменную
// для хранения логического значения, указывающего, произошел ли обмен или нет. 
// В отличие от первого варианта, эта концепция требует от нас обработки 
// каждого элемента в массиве каждый раз, когда мы проходим через него.
function bubble2(arr) {
    for (let j = arr.length - 1; j > 0; j--){
        for (let i = 0; i < j; i++){
            if(arr[i] > arr[i+1]){
                let swap = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
}

let myArr2 = [4,5,1,10,-12,-234,2353,-2,76,-33,-1224,654,98,0,3];
console.time('FirtsWay2');
console.log(bubble2(myArr2));
console.timeEnd('FirtsWay2');

let myArr4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.time('FirtsWay4');
console.log(bubble2(myArr4));
console.timeEnd('FirtsWay4');


// Пузырьковая сортировка: github
function bubbleSort(arr){
    var n = arr.length;
    for (var i = 0; i < n-1; i++){ // Выполняется для каждого элемента массива, кроме последнего.
        for (var j = 0; j < n-1-i; j++){ // Для всех последующих за текущим элементов
            if (arr[j+1] < arr[j]){ // выпоняется проверка, и если следующий элемент меньше текущего
                var t = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = t; // то эти элементы меняются местами.
            }
        }
    }
    return arr;
};

let myArr5 = [4,5,1,10,-12,-234,2353,-2,76,-33,-1224,654,98,0,3];
console.time('FirtsWay5');
console.log(bubbleSort(myArr5));
console.timeEnd('FirtsWay5');