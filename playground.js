// 데이터 타입
// 1. string -> 문자열
// 2. int -> 숫자
// 3. bool -> 참 / 거짓
// 4. char -> 'df' (문자열 한개)
// let isTrue = true;

// if (!isTrue) { // ! -> 반대의값을 반환
//     console.log("This is true!");
// } else {
//     console.log("This is not true");
// }

const ab = 4; //int

if (ab === "adfad") {
    console.log("not correct")
} else if (ab === 5) {
    console.log("this is correct")
}

//ES5

var string = "hesoo"; //string
var number = 1 //int



number = 5;

//ES6 // const , let

const a = "adfasdf"; //immutable(바꿀수없는값을 설정)
let b = 23; //mutable(바꿀수있는값을 설정)

b = 25;

console.log(b);

// 객체(object) / 배열(array)

// array -> 값은 데이터타입의 값을 모아놓음

const array = [1, 2, 3, 4, 5, 6] // 인덱스는 무조건 0 부터 시작!
console.log('array: ', array);
//const mapping =

// for / for each / map(ES6)
const mapping = array.map((value, index) => {
    console.log("value from map: ", value);
})

for (i = 0; i < array.length; i++) {
    console.log("value from for loop: ", array[i]);
}

// filter

// some

// find

