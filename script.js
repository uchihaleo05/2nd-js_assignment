
            //  Assignment_2

//  Q.1 : Write a function that creates a closure and returns a function 
// that can add a specific number to any number passed to it.
//  For example, if the closure is created with 5, 
//  the returned function should add 5 to any number passed to it.

// solution....

function addNum(num1) {
      return function (num2) {
        console.log(num1 + num2);
      };
    }
const addFive = addNum(5);
const result = addFive(10);
console.log(result);
const addTen = addNum(10);
const result2 = addTen(20);
console.log(result2);
    var addition = addNum(10);
    addition(5);


// ---------------------------------------------------------------------------


//  Q.2 : Write a recursive function that searches an array for a specific value.
//  The function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// solution....

// function recursiveFunc(array, num) {
//   if (array.includes(num)) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return recursiveFunc(array, num);
//   }
// }
// recursiveFunc([1, 2, 3, 4, 5], 3);


// ---------------------------------------------------------------------------


//  Q.3 Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


// solution....

// function addText(text) {
//   var newPara = document.createElement("p");
//   newPara.innerText = text;
//   document.body.appendChild(newPara);
// }
// addText("this is new Para");
    

// ---------------------------------------------------------------------------


// Q.4 : Write a function that adds a new list item to an unordered list in 
// an HTML document. The function should take a string argument that will be used as
// the text content of the new list item

// solution....

//   function addList(text) {
//   var ul = document.querySelector("ul");
//   var li = document.createElement("li");
//   li.textContent = text;
//   ul.appendChild(li);
// }
// addList("the new list");
  

// ---------------------------------------------------------------------------


//  Q.5 : Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// solution....

// var para = document.querySelector("p");
// function changeColor(_element, color) {
//   para.style.backgroundColor = color;
// }
// changeColor(para, "lightblue");


// ---------------------------------------------------------------------------


//  Q.6 : Write a function that saves an object to localStorage. 
// The function should take two arguments: the first argument is a string 
// representing the key to use for storing the object, 
// and the second argument is the object to store.

// solution....

// function localFunction(key, object) {
//   var stringify = JSON.stringify(object);
//   localStorage.setItem(key, stringify);
// }
// localFunction("student", { name: "leo", id: 3, class: "javaScript" });
  

// ---------------------------------------------------------------------------


// Q.7 : Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// solution....

// function localData(name) {
//   var prevValue = localStorage.getItem(name);
//   var data = prevValue ? JSON.parse(prevValue) : [];
//   console.log(data);
// }
// localData("student");


// ---------------------------------------------------------------------------


// Q.8 : Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object

// solution....

// function localData(obj) {
//     for (var key in obj) {
//       var toString = JSON.stringify(obj);
//       // data.push(toString);
//       localStorage.setItem(key, obj[key]);
//     }
//     const newObject = {};
//     for (var i = 0; i < localStorage.length; i++) {
//       const keys = localStorage.key(i);
//       const objValue = localStorage.getItem(keys);
//       newObject[keys] = JSON.parse(objValue);
//     }
//     return newObject;
//   }
//   localData({ name: "leo", id: 5 });


