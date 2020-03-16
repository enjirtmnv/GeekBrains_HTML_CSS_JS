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

myArr = [2,55,677,1,-98,34,76,1343,560,88,13,-7];

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

//Быстрая сортировка (опорный - из середины)
function swap(items, firstIndex, secondIndex) {
    const temp = items[fisrtIndex];           //temp - temporary (временный, не нужный)
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor( (left+right)/2 )];
    var i = left;
    var j = right;

   while (i <= j){

       while (items[i] < pivot){
           i++;
       }
       while (items[j] > pivot){
           j--;
       }
       if ( i <= j){
           swap(items,i,j);
           i++;
           j--;
       }
   }
   return i;
}


function quickSort3(items, left, right) {
    var index;

    if (items.length > 1){
        index = partition(items, left,right);

        if (left < index - 1){
            quickSort3(items, left, index - 1)
        }

        if (left < right){
            quickSort3(items, left, right)
        }
    }
    return items
}

myArr3 = [2,55,677,1,-98,34,76,1343,560,88,13,-7];

console.log(quickSort3(myArr3));