function binary_search(arr, element) {
    //element - элемент, индекс которого нужно найти с помощью бинарного поиска из массива arr
    let first = 0;                      //O(1)
    let last = arr.length - 1;          //O(1)

    while ( first <= last) {        //O(log n)

        let middle = Math.floor(first/2 + last/2);   //O(1)
        let guess = arr[middle];              //O(1)  guess - догадка, предположение, найденный элемент масиива

        if (guess == element){     //O(1)
            return middle;        //O(1)         //возвращение индекса искомого элемента
        } else  if (guess < element){   //O(1)
            first = middle + 1;     //O(1)
        } else {                      //O(1)
            last = middle - 1;          //O(1)
        }
    }
    return 'None';                       //O(1)
}

let myArr =  [1, 15, 22, 25, 27, 78, 345, 577, 890];          //O(1)

console.log(binary_search(myArr, 890));                      //O(1)

/*

low = 0
high = 100

element 34

mid = 49
guess = 50


 */