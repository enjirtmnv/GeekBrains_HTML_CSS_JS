function binary_search(arr, element) {   //element - искомый элемент массива
    let low = 0;
    let high = arr.length - 1;


    while (low <= high){
       let mid = Math.round(low/2 + high/2);
       let guess = arr[mid]; //guess - догадка, предположение, найденный элемент масиива

        if (guess == element){
            console.log(mid);  //возвращение индекса искомого элемента
            break;
        }
        else if(guess > element){
            high = mid - 1;
        }
        else if(guess < element){
            low = mid + 1;
        }
        else{
            console.log('None');
        }
    }
}

let myArr =  [1, 15, 22, 25, 27, 78, 345, 577, 890];

binary_search(myArr, 890);

/*

low = 0
high = 100

element 34

mid = 49
guess = 50


 */