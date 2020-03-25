//Сортировка слиянием: способ 1
function merge1(a,low,mid,high) {    //Вспомогательная функция

    let b = new Array( high + 1 - low);   //Функция merge1() используется для объединения двух половинок.
                                          // Слияние (arr, l, m, r) является ключевым процессом,
    let h;                                // который предполагает, что arr [l..m] и arr [m + 1..r] отсортированы
    let i;                                // и объединяет два отсортированных подмассива в один.
    let j = mid + 1;
    let k;
    h = low;
    i = 0;

    while (h <= mid && j <= high){
        if (a[h] <= a[j]){
            b[i] = a[h];
            h++;
        } else {
            b[i] = a[j];
            j++;
        }
        i++;
    }
    if ( h > mid){
        for( k = j; k <= high; k++){
            b[i] = a[k];
            i++;
        }
    } else {
        for( k = h; k <= mid; k++){
            b[i] = a[k];
            i++;
        }
    }
    for( k = 0; k <= high - low; k++){
        a[k+low] = b[k];
    }
    return a;
}

function mergeSort1(arr) {
    function merge_sort1( a, low, high) {              //mergeSort1 (arr [], l, r)
        if( low < high ){                              //если r > l
            let mid = Math.floor(( low + high) / 2);   //Находим среднюю точку, чтобы разделить массив на две половины: middle m = (l+r)/2
            merge_sort1( a, low, mid);                //2.Вызываем merge_sort для первой половины: Call mergeSort(arr, l, m)
            merge_sort1( a, mid + 1, high);            //3.Вызываем merge_sort для второй половины: Call mergeSort(arr, m+1, r)
            merge1( a, low, mid, high);                //4.Объединяем две половинки, отсортированные на шаге 2 и 3: Call merge(arr, l, m, r)
        }
    }
    let n = arr.length;
    merge_sort1( arr, 0, n - 1);
    return arr;
}

let myArr = [4,5,1,10,-12,-234,2353,-2,76,-33,-1224,654,98,0,3];
console.time('FirtsWay');
console.log(mergeSort1(myArr));
console.timeEnd('FirtsWay');

// массив рекурсивно делится на две половины, пока размер не станет равным 1.
// Как только размер станет равным 1, процессы слияния вступают в действие
// и начинают объединять массивы обратно, пока весь массив не будет объединен.



//Сортировка слиянием: способ 2

//Для начала создадим функцию, которая будет отвечать за вторую часть алгоритма - слияениие
//слияние двух отдельных уже отсортированных массивов в порядке возрастания их элементов:
function Sort2(arr) {
    function merge2(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;

        while (il < left.length && ir < right.length){ //// сравниваем два массива, поочередно сдвигая указатели
            if (left[il] < right[ir]){
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        // обрабатываем последний элемент при разной длине массивов
        // и возвращаем один отсортированный массив
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }

    //А теперь в основной функции mergeSort2 реализуем разделение массива, рекурсивный вызов
    // функции сортировки и слияние опять в один массив с помощью уже созданной функции merge:

    function mergeSort2(items) {
        if (items.length < 2){ //Если массив содержит один элемент просто возвращаем его
            return items;
        }
        let middle = Math.floor(items.length / 2);     // Находим середину массива и делим его на два

        let left = items.slice(0, middle);
        let right = items.slice(middle);

        // Для новых массивов снова вызываем сортировку,
        // сливаем их и возвращаем снова единый массив
        return merge2(mergeSort2(left), mergeSort2(right));
    }
    return mergeSort2(arr);
}

let myArr2 = [4,5,1,10,-12,-234,2353,-2,76,-33,-1224,654,98,0,3];
console.time('FirtsWay2');
console.log(Sort2(myArr2));
console.timeEnd('FirtsWay2');

//В отличии от всех сортировок, сортировка слиянием имеет меньшую сложность — O(n log n),
// но при этом он задействует O(n) дополнительной памяти