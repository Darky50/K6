/*
Test Life Cylce

*/

// 1 - Init
// First init get called, here you can initilize variables, define options (VU, duration, Threasholds)
//Load only once
var counter = 1

// 2 - Setup
// Called one once before load test starts
// We can return something on Setup and used in Default function and Teardown
export function setup (){
    console.log(`Inside SetUp - ${counter}`)
    return "My name is Eber"
}

// 3 - Default
// Its main function. Entry point for virtual users, virtual user keeps on calling APIs define here
// Its is VU code. It get called till your test is running

export default function(data){
    console.log(`Inside function - ${counter} VU=${__VU} ITER=${__ITER} Data is ${data}`)
    counter = counter + 1
}

// 4 - Teardown - call only once setup function finish
// Also called as clean up

export function teardown(data){
    console.log(`Inside teardown - ${counter} Data is ${data}`)
}

