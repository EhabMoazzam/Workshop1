// Task 1
function helloworld(){
    console.log("Hello World, Node.js!")
}

console.log("Task 1")
helloworld()

// Task 2

function working_array(){
    var arr = [1, 2, 3, 4, 5]
    var result

    console.log(arr)
    // Add a number 10 to the end of the array
    arr.push(10)
    console.log(arr)

    // Add a number 7 to the beginning of the array
    arr.unshift(7)
    console.log(arr)

    // Add an item (number 9) after the 3 rd  item in the array
    arr.splice(3, 0, 9)
    console.log(arr)

    // Remove the last number from the array
    arr.pop()
    console.log(arr)

    // Remove the 2nd number from the array
    arr.splice(1,1)
    console.log(arr)

    // Edit the 5 th  element in the array to have a value of 100 
    arr[4] = 100
    console.log(arr)

    // Sort the array in ascending order (smallest to biggest)
    arr.sort(function(a, b){return a-b});
    console.log(arr)
}

console.log("\nTask 2")
working_array()

// Task 3

function working_JSON(){
    // Create a javascript object with a key of people and a value that is an array of 3 objects each with a firstname and lastname.
    var json = {
        people : [
            {
                "firstname" : "John",
                "lastname" : "Willian"
            },
            {
                "firstname" : "Petter",
                "lastname" : "Loris"
            },
            {
                "firstname" : "Lelly",
                "lastname" : "Pack"
            }
        ]
    }

    console.log("\nTask 3-1")
    console.log(json)
    
    // Convert that object to a JSON string (stingify) Output the string to the console.
    var jsonStr = JSON.stringify(json)
    console.log("\nTask 3-2")
    console.log(jsonStr)

    // Convert the JSON string back into a javascript object (parse)
    var result = JSON.parse(jsonStr)
    console.log("\nTask 3-3")
    console.log(result)

}

console.log("\nTask 3")
working_JSON()

// Task 4

const arrayAdd = require('array-add-num');

function npmPack(){
    // Output the sum of numbers in the following array [5,4,3,8]
    // Output to the console the value of the array-add-num dependency that you see in your package.json file.
    console.log("Sum of Array is " + arrayAdd([5,4,3,8]))
    console.log("array-add-num dependency is ^1.0.2\n")

}

console.log("\nTask 4")
npmPack()

// Task 5

// Function Expression
var multiplyNumsExpress = function(x,y,z){
    return "new number is " + x * y * z
}

// convert the function expression to use arrow syntax
const multiplyNumsArrow = (x,y,z) => { 
    return "new number is " + x * y * z
}

console.log("\nTask 5\n")
console.log("Function Expression\n" + "var multiplyNumsExpress = function(x,y,z){\n" + "return 'new number is ' + x * y * z\n" + "}")
console.log("\tFunction Express Result : " + multiplyNumsExpress(1,2,3) + "\n")
console.log("Function Expression\n" + "const multiplyNumsArrow = (x,y,z) => { \n" + "return 'new number is ' + x * y * z\n" + "}")
console.log("\tArrow Syntax Result : " + multiplyNumsArrow(1,2,3))