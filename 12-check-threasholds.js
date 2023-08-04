/*
Checks - useful for assertions, pass/fail results
They don't fail the load test

Let's combine checks and threasholds to get best of both
*/

import http from 'k6/http'
import {check} from 'k6'

export let options = {
    vus: 10,
    duration: '10s',
    threasholds: {
        //rate fo successful checks must be great than 95%
        'checks':['rate>0.95']
    }
}

export default function(){
    const response = http.get('https://run.mocky.io/v3/0689a593-f359-43fd-a1b2-e81344a31bdb')

    check(response, {
        'is status 200: ' : r => r.status === 200
    })
}