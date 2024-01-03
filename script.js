let searchIcon = document.querySelector('.search-icon')
// let searchIcon = document.querySelector('#search-icon')
// querySelector -> id: #id-name / class: .class-name

const openNav = () => {
    document.querySelector('#mySidenav').style.width = '100%';
    searchIcon.style.display = 'none';
};

const closeNav = () => {
    document.querySelector('#mySidenav').style.width = '0';
    searchIcon.style.display = 'block';
}

// null -> 정의는 됬지만 값이 없음
// undefined -> 정의가 아예 안됨

// Example with null
let nullVariable = null;
let num = 1

console.log(nullVariable);  // Output: null
console.log(typeof nullVariable);  // Output: object
console.log(typeof num);  // Output: object

// Example with undefined
let undefinedVariable;

console.log(undefinedVariable);  // Output: undefined
console.log(typeof undefinedVariable);  // Output: undefined