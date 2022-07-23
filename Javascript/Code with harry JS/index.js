
console.log("chal hat be");
// don't use document.write
// document.write("This is document write")
console.warn("This is warning")
console.error("This is an error")

//Data types
var num1=1;
var num2=2;
console.log(num1+num2);

var str1="This is a string";
var str2='This is a string';

console.log(str1+" "+str2)

//Objects
var marks={
    ravi:23,
    shubham:212
}
console.log(marks);

//booleans
var a=true;
var b=false;
console.log(a==b)

//undefined
var und;
console.log(und)
und=1;
console.log(und)

//null
var n=null
console.log(n)

//arrays
var arr=[1,2,"MAN",4,5]
console.log(arr)

//Operators in JS + - * /
var a=2;
var b=3;
console.log("The value of a+b",a+b)

//Assignment operator
var c=b;
console.log(c);
c+=1;
console.log(c);

//functions and conditions statement (else if() also allow)
function fact(n){
    if(n<=1)
    return 1;
    return n*fact(n-1);
}

console.log(fact(5));

//Loops
var arr=[1,2,3,4,5,6];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// for Each same as loop
// arr.forEach(function(element){
//     console.log(element);
// })

let j=0;
 while(j<arr.length){
    console.log(arr[j]);
    j++;
 }
 
//Arrays method
let myarr=["fan","camera",34,null,true];
console.log(myarr.length);
myarr.pop();
console.log(myarr);
myarr.push("aman");
console.log(myarr);

myarr.shift();//pop first element
console.log(myarr);

myarr.unshift("Harry");
console.log(myarr);//push as first element

myarr=myarr.toString();
console.log(myarr);

let num=[1,45,34,6,56];
num=num.sort();//sort() function first convert all element to string then it sort
console.log(num)

//string methods

let str="aman is a good boy";
console.log(str.length);

console.log(str.indexOf("aman"));

console.log(str.slice(1,3));  //slice(a,b) a to b-1
str=str.replace("aman","naman");
console.log(str);

//Date can enabled through JS
let myDate=new Date();
console.log(myDate);


//DOM Manipulation

let elem=document.getElementById('click');
console.log(elem);

let el=document.getElementsByClassName('container');
console.log(el);

// el[0].style.background="yellow";
el[0].classList.add("bg-primary");
console.log(elem.innerHTML);


sel=document.querySelector(".container");
console.log(sel);

//JS Events
function clicked(){
    console.log("The button was clicked");
}

// window.onload=function(){
//     console.log("The document was loaded");
// }

//Arrow function

// function sum(a,b){
//     return a+b;
// }

sum=(a,b)=>{
    return a+b;
}
console.log(sum(2,3));

//set timeout and set interval

logkaro=()=>{ 
    console.log("I am you log");
}
//setTimeout(logkaro,2000);
//print function output in 2s delay

//clr=setInterval(logkaro,5000);
//clr return id
//for stop running interval use clearInterval(clr)

// JSON
obj={name:"aman",length:1,a:{this:"that"}}  //object
jso=JSON.stringify(obj);//convert object to string
console.log(jso);


//json only accepts double quotes
// convert valid string to json
//can use backstick for string
parsed=JSON.parse(`{"name":"aman","length":1,"a":{"this":"that"}}`)
console.log(parsed);

//`${}` Template literals
let hello="Hello!";
let welcome="Welcome here";
let nu=90;
str=`${hello+welcome} Your score is ${nu}`;
console.log(str);


/*
index.js:2 chal hat be
index.js:5 This is warning
(anonymous) @ index.js:5
index.js:6 This is an error
(anonymous) @ index.js:6
index.js:11 3
index.js:16 This is a string This is a string
index.js:23 Object
index.js:28 false
index.js:32 undefined
index.js:34 1
index.js:38 null
index.js:42 Array(5)
index.js:47 The value of a+b 5
index.js:51 3
index.js:53 4
index.js:62 120
index.js:67 1
index.js:67 2
index.js:67 3
index.js:67 4
index.js:67 5
index.js:67 6
index.js:76 1
index.js:76 2
index.js:76 3
index.js:76 4
index.js:76 5
index.js:76 6
index.js:82 5
index.js:84 Array(5)
index.js:86 Array(5)
index.js:89 Array(5)
index.js:92 Array(5)
index.js:95 Harry,camera,34,,aman
index.js:99 Array(5)
index.js:104 18
index.js:106 0
index.js:108 ma
index.js:110 naman is a good boy
index.js:114 Sun Jul 24 2022 01:19:10 GMT+0530 (India Standard Time)
index.js:120 <button id=​"click" onclick=​"clicked()​">​Click me​</button>​
index.js:123 HTMLCollection(2)
index.js:127 Click me
index.js:131 <div class=​"container bg-primary" id=​"firstContainer">​…​</div>​
index.js:151 5
index.js:168 {"name":"aman","length":1,"a":{"this":"that"}}
index.js:175 Object
index.js:182 Hello!Welcome here Your score is 90
*/
