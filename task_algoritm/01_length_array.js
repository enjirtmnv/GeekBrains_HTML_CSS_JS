let myArr = [ [0,0,0], [1,0,1,1,1,0], [1,0,1,1,1,1], [1,1,1,1,1,1], [] ];

// let myArr1 = [0,0,0];
// let myArr2 = [1,0,1,1,1,0];
// let myArr3 = [1,0,1,1,1,1];
// let myArr4 = [1,1,1,1,1,1];
// let myArr5 = [];


function lengthArr(arr) {

    let current = 0;                     //O(1)
        for(let i of arr){               //O(n)
            if (i > 0 ){                 //O(1)
                current = current +1;     //O(1)
            }
        }
    return current;                     //O(1)
}


// console.log(lengthArr(myArr2));

for (let j of myArr){
    console.log(lengthArr(j));     //O(n)
}