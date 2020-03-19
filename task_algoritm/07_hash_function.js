//в соответствие каждой букве простое число: а= 2, Ь = 3, с= 5, d = 7, е = 11 и т. д.
// Для строки хеш-функцией становит­ ся остаток от деления суммы всех значений на размер хеша.
// Например, если размер хеша равен 10, то для строки «bag» будет вычислен индекс 3+2+17%10 = 22%10 = 2

let myNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function separationABC(arr) {
    var res = arr.split('');
    return res;
}
separationABC(alphabet);


function coupleKeyValue() {
    let myObject = {};
    let resAbc = separationABC(alphabet);


    for(let i = 0; i < resAbc.length - 1; i++){
            myObject[resAbc[i]] = myNumber[i];
    }
    return myObject;
}
coupleKeyValue();


function name(myName) {
    let coupleKeyValue = coupleKeyValue()
    let nameArr  = myName.split('');
    return nameArr;

    for(let i = 0; i < resAbc.length - 1; i++){
        if( nameArr[i] ==  coupleKeyValue[i]){

        }
    }
}
name('bob');




