//DOM Elements
const time = document.getElementById('timer'),
    greeting = document.getElementById('greet'),
    name = document.getElementById('name');

//Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

//Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

//12 hour format
hour = hour % 12 || 12;

time.innerHTML = `<span id="intime">The time is</span> <br> ${hour}<span>:</span>${min}<span>:</span>${sec}<span> </span>${amPm}`;
setTimeout(showTime, 1000);
}

//Run
showTime();


/*var myVariable = window.prompt('Enter here');

if(myVariable>4){
    alert('Congo!')
} else {
    alert('we are really sorry')
} */

var myArray = ["RK", 23, "Chaitra"];
for (i=0; i<myArray.length; i++) {
    alert(myArray[i])
}
