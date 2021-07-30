// fetch('https://192.168.0.116:4003/v2/configuration/buttons', {headers: {'content-type': 'application/json',},method: 'GET', mode: 'no-cors' ,credentials: 'include'})
//   .then(response => response.json())
//   .then(json => console.log(json));


//   fetch('https://192.168.0.116:4003/v2/configuration/buttons', {
//     headers: {
//         'content-type': 'application/json',
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "*",
//         'origin' : 'chrome-extension://laookkfknpbbblfpciffpaejjkokdgca',
//     },
//     method: 'GET', 
//     mode: 'cors' ,
//     credentials: 'include'
// })

  
// .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(myJson);
  // });

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))

// {method: 'GET', mode: 'no-cors'}

// export import


// var xmlhttp = new XMLHttpRequest();
// var url = "https://192.168.0.116:4003/v2/configuration/buttons";

// xmlhttp.onreadystatechange = function() {
// if (this.readyState == 4 && this.status == 200) {
//     var myArr = JSON.parse(this.responseText);
//     // myFunction(myArr);
//     console.log(myArr);
//     }
// };

// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// fetch("https://192.168.0.116:4003/v2/configuration/buttons", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
//     "authorization": "Basic YWRtaW46YWRtaW4=",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "sec-gpc": "1",
//     "upgrade-insecure-requests": "1"
//   },
//   "referrer": "https://192.168.0.116:4003/v2/configuration/buttons",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// })  
//   .then(response => response.json())
//   .then(json => console.log(json));

  
  // curl -X --insecure GET "https://192.168.0.116:4003/v2/configuration/buttons" -H "accept: application/json"
  // curl --insecure -X GET "https://192.168.0.116:4003/v2/configuration/buttons" -H "accept: application/json"
  // curl --insecure -X GET -F "https://192.168.0.116:4003/v2/configuration/buttons" -H "accept: application/json"
  // curl --insecure --anyauth -X GET -k "https://192.168.0.116:4003/v2/configuration/buttons" -H "accept: application/json"
  // curl --insecure -X GET "https://192.168.0.116:4003/v2/configuration/buttons" -H "accept: application/json"
  // curl --insecure --anyauth -X GET -k "https://192.168.0.116:4003/v2/configuration/buttons" -H "accept: application/json" -u admin:admin
  // curl --insecure -X GET "https://192.168.0.116:4003/v2/configuration/system/device-identity" -H "accept: application/json"


let githubURL = new URL(document.URL);
console.log(githubURL.href);
console.log(githubURL.searchParams.toString());
let params = githubURL.searchParams;
for (let pair of params.entries()) {
  console.log(`key: ${pair[0]}, value: ${pair[1]}`)
  console.log(pair[0])
  console.log(pair[1])
  document.getElementById(pair[0]).value=pair[1];
}

document.getElementById("Tester_name").value="Linus";

function myFunction() {
  document.getElementById("Tester_name").value = "Linus 2";
}