const sequence = 'Hello World'

let numberInt 
numberInt = 240710 // this is number data type
numberInt = 'NTTPNHG' // this is string data type

// null (data type) is the absense of the val.
// another is undefined (equals to nothing)

true && false // these are booleans data type

let dictionary_objects = {
    Achilles: 'should read',
    Leonardo_daVinci: 'great exercises for brain',
    Einstein: sequence
} //objects or dictionary



console.log(sequence)
console.log(dictionary_objects)

// These are two slashes structure for comment in JS


// functions

function fstFunctions() {
    console.log(console)
}

fstFunctions()

function sndFunction(val, value) {
    console.log(val * value)
}

sndFunction(4, 5)
sndFunction(6, 7)

// operator: we can have === or !== as well

// && AND, || OR, ! same same OPPOSITE

console.log(typeof sequence)

let condition11 = true
let condition12 = false


if (condition11 && condition12) {
    console.log('Hey guys!')
} else if(condition11 || condition12) {
    console.log('one the the values is true')
} else {
    console.log('the val was false, so here we are')
}

let array = [1, 2, 5, 6, 7, 9, 2, 0, 3490]

let i = 0
let len = array.length

while (i < len) {
    console.log('value is true: ', i, array[i])
    i++ // same i += 1
}

for (let j = 0; j < len; j++) {
    if (j <= 6) { //or if (j <= 6)
        // continue // means skip this loop
        break // means end the loop when the condition is met
    }
    console.log('value is true: ', j, array[j])
}
