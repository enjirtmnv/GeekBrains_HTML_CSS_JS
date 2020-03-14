//Быстрая сортировка через for
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
    }
    return quickSort(less).concat(pivot, quickSort(greater));
}

myArr = [2,55,677,1,-98,34,76,1343,560,88,13,-7];

console.log(quickSort(myArr));


//Быстрая сортировка через forEach
function quickSort2(arr) {
    if (arr.length === 0){
        return [];
    }

    var less = [];
    var greater = [];
    var pivot = arr[0];

    arr.forEach(function (item, i, arr){

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