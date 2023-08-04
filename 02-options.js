import http from 'k6/http'

export let options = {
    //Declare configuration for the 10 virtual users
    vus: 10,
    duration: '10s'
}


//Main function where user will be spread
//Entry point for virtual users
//To execute the script in the Terminal: k6 run tests/02-options.js
export default function() {
    http.get('https://www.google.com/');
}