/*
Parse HTTP reponse
will return a json object

HTTP API is -  https://run.mocky.io/v3/c53fe56a-1b58-4782-99c1-3839485a19c3

HTTP HEADERS is content-type application/json

Returns response:
{
"Message" :"Data fetched successfully"
}

*/

import http from 'k6/http'
import {check} from 'k6'

export default function (){
    var url = 'https://run.mocky.io/v3/c53fe56a-1b58-4782-99c1-3839485a19c3'

    var headerParam = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const response = http.get(url, headerParam)

    check(response, {
        'is status 200: ' : (r) => r.status === 200,
    })

    //it is a JSON and we need to parsed
    let body = JSON.parse(response.body)

    //print body
    console.log(`response body is ${JSON.stringify(body)}`)
    console.log(`Message is ${body.Message}`)

    check(response, {
        'The message is Success: ' : (r) => JSON.parse(r.body).Message === "Data fetched successfully",
    })
}