import http from 'k6/http'

//Main function where user will be spread
//Entry point for virtual users
//To execute the script in the Terminal: k6 run tests/01-test.js
//To execute with VuS in Terminal: k6 run --vus 10 --duration 5s tests/01-test.js
export default function() {
    http.get('https://www.google.com/');
}