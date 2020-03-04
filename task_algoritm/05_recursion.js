//Итеративный способ возведения в степень
function power(x,n) {
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= x
    }
    return result;
}

console.log(power(2, 6));

//Рекурсивный способ возведения в степень
const power2 = (x,n) => {
    if (n == 1){
        return x;
    } else {
        return x * power2(x, n - 1)
    }
};

console.log(power2(2, 5));



//Рекурсивные обходы
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

const sumSalaries = (department)  => {    //department - отдел
    if (Array.isArray(department)){
        return department.reduce((sum,current) => sum + current.salary, 0);
    } else {
        let result = 0;
        for (let subdep of Object.values(department)){
            result += sumSalaries(subdep);
        }
        return result;
    }
};

console.log(sumSalaries(company));