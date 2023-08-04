/*
{
    "data":[
        {
        "name": "Eber Garcia",
        "email": "ebergarcia@gmail.com",
        "job": "Automation Tester",
        "location" : "Mexico",
        "array": [
            1,
            2,
            3
            ]
        },
        {
        "name": "Jesus Garcia",
        "email": "jesusgarcia@gmail.com",
        "job": "Teacher",
        "location" : "UK",
        "array": [
            4,
            5,
            6
            ]
        },
        {
        "name": "Javier Garcia",
        "email": "javiergarcia@gmail.com",
        "job": "Ingeniero",
        "location" : "USA",
        "array": [
            7,
            8,
            9
            ]
        }
    ]
}

URL: https://run.mocky.io/v3/5dd81936-0ac0-4a73-a740-161f2d32e5b9

*/

import http from 'k6/http'

export default function(){
    let response = http.get('https://run.mocky.io/v3/5dd81936-0ac0-4a73-a740-161f2d32e5b9')

    //lets print the values from the response
    let body = JSON.parse(response.body)

    //array is on data
    body.data.forEach(element => {
        console.log(`value of name from data is ${element.name}`)

        //lets print the array atribuite

        element.array.forEach(elementArray => {
            console.log(`value of property array is: ${elementArray}`)
        })
    });

    


}