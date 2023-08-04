import http from 'k6/http'

//Rampup and Rampdown user
export let options = {
    stages :[
        {duration: '10s', target : 5}, //5 users for 10 seconds

        {duration: '20s', target : 3}, //3 users for 20 seconds

        {duration: '20s', target : 0} //again 3 users for 20 seconds

    ]

    , vus:10, duration: "1m3s" //k6 run 
}

//Main function, VU will call endpoint
export default function(){
    http.get('https://www.google.com/')


}