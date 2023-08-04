import {Counter, Trend} from 'k6/metrics'
var retryCounter = new Counter("GetAPI_MAX_RETRY")
import http from 'k6/http'
import {sleep} from 'k6'
//we will use sleep to wait for seconds
var retryTrend = new Trend("GETAPI_MAX_RETRY_TREND")


export default function (){
    //so retry the API call

    var maxAttempts = 5
    retryCounter.add(1)
    for(var retries = 5; retries > 0; retries--)
    {
        var numberOfAttempts = maxAttempts - retries + 1 
        retryTrend.add(numberOfAttempts)
        const response = http.get('https://run.mocky.io/v3/e192a0e4-5370-4ff2-a558-0c340609a836')

        //lets assume that this API return 404
        // 404 means success
        if(response.status !== 404){
            retryCounter.add(1)
            console.log(`response is not correct. attempt number is ${numberOfAttempts} VU=${__VU} ITER=${__ITER} sleeping for 1 second`)
            //so we need to retrieve after 1 second
        sleep(1)
        }
        else{
            //response is correct, so no need to call for loop
            retries == 0
        }
    }    
}
