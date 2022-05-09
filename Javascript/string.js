
let string="This is a string"
undefined

string
'This is a string'

typeof string
'string'

//For escape use backslash
undefined
let badstring3='You\'ve got no right to take my place';
undefined

badstring3
"You've got no right to take my place"

let hello="Hello!";
undefined
let welcome="\"Welcome to Apna college\"";
undefined

hello +welcome
'Hello!"Welcome to Apna college"'

//concate
undefined
"string"+100
'string100'
19+12
31
'2'+'3'
'23'

//string to number
undefined
let numstring='123';
undefined
number(numstring);
VM829:1 Uncaught ReferenceError: number is not defined
    at <anonymous>:1:1
(anonymous) @ VM829:1
Number(numstring);
123
//Number is a inbuilt function
undefined

//number to string
undefined
let num=2343;
undefined
num.toString{};
VM1041:1 Uncaught SyntaxError: Unexpected token '{'
num.toString();
'2343'

//Templete literals
undefined
//backtick `
undefined
let output=hello+welcome+" Your score is "+num;
undefined
output
'Hello!"Welcome to Apna college" Your score is 2343'
`${hello+welcome} Your score is ${num}`
'Hello!"Welcome to Apna college" Your score is 2343'
