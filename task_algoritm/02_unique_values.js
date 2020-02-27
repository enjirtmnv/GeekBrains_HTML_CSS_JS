let arr = [1,2,3,5,1,5,9,1,2,8];       //O(1)

function searchUnique() {

    let arrUnique = [];                     //O(1)
    for (let i of arr) {                    //O(n)
        if (!arrUnique.includes(i)){        //O(1)
            arrUnique.push(i)               //O(1)
        }

    }
    return arrUnique;                      //O(1)
}

console.log(searchUnique());      //O(n)

