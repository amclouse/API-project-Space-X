const baseURL = 'https://api.spacexdata.com/v3/launches'
let id;
// document.getElementById('.myInput');
const searchTerm = document.querySelector('#search');//selects search Term
const submitBtn = document.querySelector('.submit'); //selects submit button
const searchForm = document.querySelector('form');//selects form
let capsuleName = document.querySelector('ul');//selects capsule name
const section = document.querySelector('section');//assigns value to empty section in HTML


searchForm.addEventListener('submit', fetchResults); //Makes our button fetch info when it it clicked.
//how can i inject value of input field to fetch

function fetchResults(e) {//beginning of function
    e.preventDefault()//stops from refreshing the page
let id = searchTerm.value;//definfing previously declared variable

    // url = baseURL + searchTerm; 
    url = `${baseURL}?limit=1&offset=${id}`;//url construction for info fetch
        
    fetch(url)//json'ifying information from url
     .then(function(result) {//giving second function a variable of 'result'
       return result.json();//json'ified data
     }).then(function (json) {//giving last function variable of json
       displayResults(json); //displayResults function will display this variable; defined below
     });
}

function displayResults(json) {//beginning of our functions, variable json
  let launch = json[0]//defining 0'th index of json data in array
  section.innerHTML = "";//area between section between html, defined previously.
  console.log(launch)//console.log!

  let flight = document.createElement('h1')
  flight.innerText = launch.flight_number;
  section.appendChild(flight)

  let missionHeader = document.createElement('h2')
  missionHeader.innerText = launch.mission_name;
  section.appendChild(missionHeader)

  let launchyear = document.createElement('h2')
  launchyear.innerText = launch.launch_year
  section.appendChild(launchyear)

  let missionImg = document.createElement('img')
  missionImg.src = launch.links.mission_patch;
  section.appendChild(missionImg)

}
