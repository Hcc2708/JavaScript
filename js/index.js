document.getElementsByClassName("name")[0].innerHTML =
  "<h1>Hello Hemchand Chandravanshi<br> how are you?<h1>";

document.getElementsByTagName("h1")[0].style.color = "blue";
document.getElementsByTagName("h1")[0].style.border = "2px solid red";
document.getElementsByTagName("h1")[0].style.boxShadow = "5px 10px 5px grey";
document.write("this is content by script");
//javascript console API
console.log("console API");
// console.error("this is error");
// console.warn("this is warning");
// // console.clear() will clear the console
// //console.assert(expression, massage)
// console.assert(4 == 6, "this is not true");
// console.assert(
//   document.getElementById("MyElement"),
//   "There is no element with the ID 'MyElement'"
// );
// console.log("this is working fine")
//javascript variables : Containers to store data values,
//identifiers refers to memory where the values are stored
var number = 26;
var number2 = 27;
var number = 50;
console.log(number + number2);
/* Multi
    line
    comment*/

//DAta types in javascript

// numbers
var num = 24;
var num2 = 27.5;
// console.log(typeof num, typeof num2);
//string
var s = "raj";
var s2 = "raj";
// note : there is no character type in javascript only string is there unlike c++, java
//object
var obj = {
  1: "hemchand",
  2: "raj",
  3: "khush",
};
console.log(obj);
// boolean
// var a = false;
// var b = true;
// console.log(a, b);
// undefined
var a;
console.log(a);
var b = undefined;
console.log(b);
// null
var c = null;
console.log(c);
// arrays

/* At a very high level there are two data types in javascript
    1. Primitive data types : undefined, null, string, boolean, number, symbol;
    2. Reference data types : Arrays, Object;
    */

// unlike c++ or java array can store any data types.
var array = [1, 2, "string"];
console.log(array);
console.log(1 != 2);
console.log(3 & 2); // bitwise operators
console.log(4 | 2);
console.log(~3); // 2's complement
console.log(!5); // logical not
console.log(2 << 2);
console.log(8 >> 2);
var x = 5;
console.log(x++);
console.log(x--);

// // DRY = Do not repeat yourself
// function practice(A, B)
// {
//     var c = A+B;
//     console.log(c);
//     // return statement is not mandatory but in case of there is no return statement function return type is undefined
// }
// var d = practice(3, 4);
// console.log(d) // undefined: a variable that has not been assigned a value.

function practice2(A, B)
{
    return (A+B)/2;
}
d = practice2(3, 4);
// console.log(ac);
console.log(d);
console.log(typeof(d));

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
// var size = A.length;
// for (var i = 0; i <= size; i++) {
//   if (search === A[i]) {
//     alert(search + " is available at index " + (i + 1) + " of our bakery");
//     check = true;
//     break;
//   } else {
//     alert("We are sorry " + search + " is not available in our bakery");
//   }
// }

// for and if works same as c++ internal expression for condition could be different as per the features available in js

// for each

// var arr = [1 ,3, 4, 5, 7]
// var arr2 =  [1 ,3, 4, 5, 7];
// arr.forEach(function(element, index, arr){
//     console.log(index, "->", element);
//     console.log(arr2[index]);
// })

//syntax : arr.forEach("pass the function with array values and index as arugment and write it's definition that what you want to do with array values")

var arr3 = ["raj", 1, 2, 3, 4, "hemu"];
arr3.unshift("abc");
console.log(arr3.unshift("xyz"));
console.log(arr3.shift());// returns the poped element from front
console.log(arr3.pop());// returns the poped element from lasts, make changes in original 
// console.log(num);// returns the length of new array.
console.log(arr3.sort());// makes changes in original and returns the changed array as well
console.log(arr3.reverse());//makes change in original and returned the changed array as well
console.log(arr3);

console.log(arr3.toString());// does not make changes in original and returns the string representaion of given array including commas
console.log(typeof(arr3));
console.log(arr3);

var str  = "raj";
console.log(typeof(str));

const arr4 = [1, 2, 34, 4];
console.log(arr4.sort());// sort in alphabetical order, it firstly convert the values in string then perform string comparision.
console.log(typeof(arr4));//  print object in console for object, null and array
console.log(Array.isArray(arr4))// way to check whether the variable in array or not.
console.log(arr4.indexOf(34));
console.log(arr4.lastIndexOf(2));
var str = "Hello, How r u, r u good?";
var str2 = str.replace("r", "are");// replace the first occurrence of r with are not all occurrence, do not effect original
console.log(str2);
console.log(str);
console.log(str.slice(0,4));// do not effect original
console.log(str);
console.log(arr4.slice(0, 1)); // do not effect original
console.log(arr4);

// Date:

let date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getMonth());// gives index value for months
console.log(date.getTime());// it returns the number of milliseconds since 1 January 1970 (Unix Epoch)
console.log(date.getFullYear());
console.log(date.getSeconds());
console.log(date.getMinutes());

let ele = document.getElementById('n');
console.log(ele);
console.log(typeof(ele));
ele.classList.add("newClass");// to add new class in elements.
console.log(ele);
ele.classList.remove("newClass");
console.log(ele);
console.log(ele.innerHTML);
console.log(ele.innerText);
console.log(typeof(ele.innerHTML));
console.log(typeof(ele.innerText));
console.log(ele.innerHTML.length);
console.log(ele.innerText.length);
ele.innerText = "I'm Happy";
console.log(ele.innerHTML);
console.log(ele);
var createEle = document.createElement('p');
console.log(createEle);
createEle.innerHTML = "<strong> Doing Well...</strong>";
ele.appendChild(createEle);

// to replace the child.
// var create2ndele = document.createElement('i');
// create2ndele.innerText = "  Really?";
// ele.replaceChild(create2ndele, createEle);