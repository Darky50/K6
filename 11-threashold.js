/*
Threashold define pass/fail criteria for test cases

Example
System does not produce more than 1% of errors
Response time for 95% of APIs request should be 200 ms
Reponse time for 99% of request should be 400 ms

Threasholds analyse performance metrics defined above
determine final test results
mark test as pass/fail


Generated in https://designer.mocky.io/
https://run.mocky.io/v3/0689a593-f359-43fd-a1b2-e81344a31bdb

*/

import http from 'k6/http'
import {Rate, rate} from 'k6/metrics'

//Declare Rate
const failureRate = new Rate('FAILED_REQUESTS')

export let options = {
    threasholds:{
        //Define requirements
        'FAILED_REQUESTS' : ['rate<0.1'],
        'http_req_duration' : ['p(95)<200', 'p(99)<400']
    }
};

export default function(){
    let res = http.get('https://run.mocky.io/v3/0689a593-f359-43fd-a1b2-e81344a31bdb') //this API returns 200, so we check for 200

    //Apply Threasholds
    failureRate.add(res.status !== 200) //if response is not 200, then fail
}