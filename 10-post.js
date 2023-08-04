/*
API is https://run.mocky.io/v3/6e342ed7-99a1-4d65-9fe0-7f65ec9b01ef
POST Email and password to this API in JSON Format (asuntion)
API will response 200

*/

import http from 'k6/http'

export default function(){
    var url = 'https://run.mocky.io/v3/6e342ed7-99a1-4d65-9fe0-7f65ec9b01ef'

    var param = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    //Lets define body - it will accept email and password
    var payload = JSON.stringify({
        email: "abc@gmail.com",
        password: "abcdetf"
    })

    //Making the POST
    let response = http.post(url, param, payload)
}