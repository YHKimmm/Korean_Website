// 데이터 타입
// 1. string -> 문자열
// 2. int -> 숫자
// 3. bool -> 참 / 거짓
// 4. char -> 'df' (문자열 한개)
let isTrue = true;

// if statement 예시
const personA = {
    name: 'brayden',
    sex: 'male'
};
const personB = {
    name: 'heesoo',
    sex: 'women'
};

console.log(personA.sex);
console.log(personB);

if (personA.sex !== "male") {
    alert("personA is male");
} else {
    alert("personA is not male");
}

const ab = 4; // int

if (ab === "adfad") {
    console.log("not correct");
} else if (ab === 5) {
    console.log("this is correct");
}

// ES5
var string = "hesoo"; // string
var number = 1; // int
number = 5;

// ES6 // const , let
const a = "adfasdf"; // immutable (바꿀 수 없는 값으로 설정)
let b = 23; // mutable (바꿀 수 있는 값으로 설정)
b = 25;
console.log(b);

// 객체(object) / 배열(array)
// array -> 값은 데이터 타입의 값을 모아놓음
const array = [1, 2, 3, 4, 5, 6]; // 인덱스는 무조건 0부터 시작!
console.log('array: ', array);

// for / for each / map(ES6)
const mapping = array.map((value, index) => {
    console.log("value from map: ", value);
});

for (let i = 0; i < array.length; i++) {
    console.log("value from for loop: ", array[i]);
}

// filter
const numbers = [1, 5, 8, 10, 15];
const petBirthYear = [2010, 2003, 1998, 2000];
const findPets = petBirthYear.filter((birthYear) => {
    return birthYear >= 2005;
});
console.log(findPets);

// Example: Filtering out numbers greater than 8
const filteredNumbers = numbers.filter((number) => {
    return number <= 8;
});
console.log(filteredNumbers);

// ES5 VS ES6(arrow function)
// const abc = number.filter(function (number) {
//     return number <= 8;
// })

// some
const numbersExample = [1, 5, 8, 10, 15];
const hasNumberGreaterThan10 = numbersExample.some((number) => {
    return number > 20;
});
console.log(hasNumberGreaterThan10);

// find
const persons = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 35 }
];
const filterPerson = persons.filter((person) => {
    return person.age >= 30;
});
console.log(filterPerson);

filterPerson.map((person, index) => {
    console.log(index, person);
});

const foundPerson = persons.find((person) => {
    return person.age >= 50;
});
console.log(foundPerson);

// const license_key = 'adfadfadf'

// json
