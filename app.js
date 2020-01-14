// my name, number of states, and 9
var name = "Maddie Conaway";
const numofstates = 50;
var nbr = 5+4;
var veggieArray = ["green beans","tomato", "asperagus", "beans"];
var memberList = [
    {name: "Maddie", age: 40},
    {name: "David", age: 17},
    {name: "Candace", age: 20},
    {name: "Savvy", age: 24},
    {name: "Levi", age: 30}
]

console.log(sayHello());
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
console.log("before listVeggies");
listVeggies();

var j = 0;
while (j < 5){
    checkAge(memberList[j].name, memberList[j].age);
    j++;
}

var k = getLength("Hello World");
if (k % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!")
}

function sayHello () {
    return "Hello World!";
}

function checkAge (name, age) {
    if (age<21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

function listVeggies () {
    var i;
    for (i = 0; i < veggieArray.length; i++) {
        console.log(veggieArray[i]);
    }
}

function getLength( inStr ) {
    return inStr.length;
}