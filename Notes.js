// Spread Operator
let a = [1, 3, 4, 2, 8, 33];

let a1 = [...a];
console.log(a1);        //[1, 3, 4, 2, 8, 33]

function avg(v1, v2) {
    return (v1 + v2) / 2;
}

console.log(avg(...a));

let a2 = [2, 55, 3, 7];
let a3 = [...a, ...a2]
console.log(a3);

let a4 = [33, ...a, 7, 4, 2];
console.log(a4);

let obj1 = {
    name: 'Priyanka',
    Hobby: "Badminton"
}

let obj2={...obj1,drink:'warm water'};
console.log(obj2);

// Destructuring objects
let {name,Hobby,drink}=obj2; 
console.log(name,Hobby,drink);

// Map Function
let map_res= a.map((value)=>{
    return value*10;
})
console.log(map_res);

// Filter Function
let filter_res=a.filter((value)=>{
    return ((value%2)==0)
})
console.log(filter_res);

// Reduce Function
let reduce_res=a.reduce((value1,value2)=>{
    return value1+value2
})
console.log(reduce_res);

// Triple Equal
if(1=='1')
console.log('Without ===; 1=="1" is true');

if(1==='1')
console.log('Will never execute');
else
console.log('With ===; 1=="1" is false');
