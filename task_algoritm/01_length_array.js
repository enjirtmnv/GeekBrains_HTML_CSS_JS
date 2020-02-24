let arr1 = [0,0,0];
let arr2 = [1,0,1,1,1,0];
let arr3 = [1,0,1,1,1,1];
let arr4 = [1,1,1,1,1,1];
let arr5 = [];


function lengthArr() {

    let current = 0;

        for(let i of arr4){
                if (i > 0 ){
                    current = current +1;
                }
        }

    console.log(current);
}

lengthArr();
