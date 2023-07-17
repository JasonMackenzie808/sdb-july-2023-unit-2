/* 
Comparison operators:
when using comparison operators it will result in a true or false

Equality operators

double equal: ==
-does not care about data type

triple equal: ===
-does care about data type

Not Equal: (!=), (!==)

Numerical comparison
>=
<=
>
<

*/

let myAge = 43
let friendAge = "43"

//Double Equal
console.log(myAge == friendAge)

//Triple Equal
console.log(myAge === friendAge)

// ! String Example

let helicopter1 = "  blackhawk    "
let helicopter2 = "     Blackhawk  "

console.log(helicopter1.toLowerCase().trim() === helicopter2.toLowerCase().trim())

//Not equal

let friend2Age = "25"

console.log(myAge != friend2Age)

console.log(myAge !=friendAge)

console.log(myAge !== friendAge)

// ! Numerical (Greater Than or Less Than)

let minAgeToJoinMilitary = 18
let hankAge = 16
let bethAge = 24

console.log(hankAge >= minAgeToJoinMilitary)
console.log(bethAge >= minAgeToJoinMilitary)

// ! AND and OR Operators

let person1 = "developer"
let person2 = "admin"
let person3 = "guest"

console.log("They can view page:", person1 == "developer" || person1 == "admin")

// If a number is even and divisible by 10

let num1 = 50

console.log(num1 % 2 === 0 && num1 % 10 === 0)