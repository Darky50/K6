/*

[
    {
        "name" : "Eber Garcia",
        "email" : "ebergarcia@gmail.com",
        "job" : "Automation Tester",
        "location" : "Mexico"
    },
    {
        "name" : "Jesus Garcia",
        "email" : "jesusgarcia@gmail.com",
        "job" : "Teacher",
        "location" : "UK"
    },
     {
        "name" : "Ramon Garcia",
        "email" : "ramongarcia@gmail.com",
        "job" : "Electronico",
        "location" : "EUA"
    }
]

URL: https://run.mocky.io/v3/c5596ee8-1696-4664-99d9-71ce44c5caa3

*/

import http from 'k6/http'

export default function() {
    let response = http.get('https://run.mocky.io/v3/c5596ee8-1696-4664-99d9-71ce44c5caa3')

    //parse the reponse array

    let body = JSON.parse(response.body)

    //This how we can display the information inside the body

    body.forEach(element => {
        console.log(`name is ${element.name}`)
    });

}