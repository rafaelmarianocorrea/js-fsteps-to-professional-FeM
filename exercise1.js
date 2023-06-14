function sum(a, b) {
    return a + b;
}

console.log(sum(2, 9));

"aloha".indexOf("lol");

console.log();


"aloha" + "!"

"ALOHA".toLowerCase()

let remember = "sdsds";


let x =  ["a", "b", "c"];

x.length

x[1]

x.includes("a")
x.includes("i")

x[1] = "i";

x

let lastItem = x.pop();
x

lastItem

x.push("k");
x
x.push("l");

let empty =[];
empty.push ("first")
empty
empty.length = 6

let y = ["c","a","d","b"];
y
y.sort()
y.join(" e ")

let z = [1,2,3]
z.concat([4,5,6])
let result = z.concat([4,5,6])
result
result.push(9)
result
result. pop(9)
result

let abcArray = ["a","b","c"];
abcArray[1] = "d";
abcArray

let abcString = "abc";
abcString[1] ="d";
abcString
// strings and primitives immutable but you can mutate arrays

let number1 = [1,2,3];
let result1 = number1.push(4);
number1
result1


let number2 = [1,2,3];
let result2 = number2.concat([4]);
number2
result2
// concat dont change the array. instead create a new one

const operands = [4,6];
const sum1 = operands[0] + operands[1];
sum1

operands[0] = 5;
const newSum = operands[0] + operands[1];
newSum
// this operation is valid, as the const will always point to the same array but you can change the "content" of the array

let array1 = [1,2,3];
let array2 = array1;
array2
array1[0] = 4;
array1
array2
// similar is valid to let. you can change the content, and where it points.

const rafael = {
  name: "Rafael",
  home: "uk",
  languages:["english","portuguese","italian"],
  pet:{
    pet1: "simba",
    pet2: "manu"
  },
  vehicle: "fiesta",
  hobbies: ["travel","gaming","eating","party"],
  speak: function() {
    console.log("wooof");
  } 
};

const whyThis = { name: "Rafael"}

whyThis.speak = function() {
  console.log("hi my name is", this.name);
}

whyThis.speak()





