//Setup End Date for Countdown (get)
let launchDate = new Date("Jan 06, 2024 12:00:00").getTime();

//Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick () {
  //get current Time
  let now = new Date().getTime();
  //get the difference
  let t = launchDate - now;
  //check if time is above 0
  if (t > 0) {
    
    //setup days, hours, sec and min
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    //prefix any number below 10 with 0
    if (days < 10) {days = "0" + days; }
   
    //to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {hours = "0" + hours; }

    //to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60 ));
    if (mins < 10) {mins = "0" + mins; }

    //to calculate seconds
    let secs = Math.floor((t % (1000 * 60)) / (1000));
    if (secs < 10) {secs = "0" + secs; }

    //create time string
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    //set time on document
    document.querySelector('.countdown').innerText = time;

  }
}