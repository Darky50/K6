/*
Checks will not fail the whole load test suite
So we will use Rate along with Checks
*/
import {Trend} from 'k6/metrics'
import http from 'k6/http'
//check is the way we are going to assert on K6, in this case we are asserting the code 200
import {check} from 'k6'
//import Rate
import {Rate} from 'k6/metrics'
//export variable that we will use in the test
export let errorRate = new Rate('errors')

//define trend
var getApiTrend = new Trend("TREND_Get_Api_Duration")
var getApiTrendWaiting = new Trend("TREND_Get_Api_Waiting")

//define options
export let options = {
    thresholds :{
        errors: ['rate<0.1'] //i.e. 10% of error are allowed
    }
}


export default function (){
    let response= http.get('https://run.mocky.io/v3/e192a0e4-5370-4ff2-a558-0c340609a836')
    console.log(`reponse body length ${response.body.length} for VU = ${__VU} Iteration ${__ITER}`) //Response body length is 0, and Virtual User 2
    const check1 = check(response, {
        'is response status is 200:' : (r) => r.status === 200,
    })

    errorRate.add(!check1); // not 200

    const check2 = check(response, {
        'body size is 43 :' : (r) => r.body.length == 44,
    })

    errorRate.add(!check2); // body length not matched 

    //added response duration inside custom trend
    getApiTrend.add(response.timings.duration)
    getApiTrendWaiting.add(reponse.timings.waiting)
}