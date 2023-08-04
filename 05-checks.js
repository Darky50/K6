//Use https://designer.mocky.io/ to generate an endpoint

//We need to perform testing on: https://run.mocky.io/v3/4041b895-952a-4030-88e2-f3118136c1ae

//https://run.mocky.io/v3/e192a0e4-5370-4ff2-a558-0c340609a836
//Response body:{
//"Message" : "API executed successfully"
//}
//size is 43 caracters

import http from 'k6/http'
//check is the way we are going to assert on K6, in this case we are asserting the code 200
import {check} from 'k6'

export default function (){
    let response= http.get('https://run.mocky.io/v3/e192a0e4-5370-4ff2-a558-0c340609a836')

    console.log(`reponse body length ${response.body.length} for VU = ${__VU} Iteration ${__ITER}`) //Response body length is 0, and Virtual User 2

    check(response, {
        'is response status is 200:' : (r) => r.status === 200,
        'body size is 43 :' : (r) => r.body.length == 43,
    })
}
