var arr = [1,2,3,5,1,5,9,1,2,8];

function searchUnique() {

    let arrUnique = [];

    for (let i of arr) {
        if (!arrUnique.includes(i)){
            arrUnique.push(i)
        }

    }
    console.log(arrUnique);
}

searchUnique();

