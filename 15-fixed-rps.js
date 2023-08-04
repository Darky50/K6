/*
We can control the total of request that is going to performance K5
Each time the total of request/iteration are different

This depends on the API response, your laptop/server/vm/internet on which you are executing the test
To control this we can use the --rps (request per second)

K6 run .\15-fixed-rps.js --vus 5 --duration 5s --rps 5

5 virtual users, 5 seconds duration and 5 request per second

 */

 import http from 'k6/http'

 export default function (){
     http.get("https://run.mocky.io/v3/0689a593-f359-43fd-a1b2-e81344a31bdb")
 }