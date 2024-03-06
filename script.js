
let clock = document.getElementById('clock');
let date = document.getElementById('date');
let day = document.getElementById('day');

let newdate = new Date();
date.innerHTML = newdate.toLocaleDateString();

// let daysOfWeek = [
//   'Sunday',
//   'Monday',
//   'Tuesdasy',
//   'Wednesday',
//   'Thursdasy',
//   'Friday',
//   'Saturday',
// ];
// let currentWeekDay = daysOfWeek[newdate.getDay()];
// day.innerHTML = currentWeekDay;

let currrentWeekDay = newdate.toLocaleString('default', {
  weekday: 'long',
});

day.innerHTML = currrentWeekDay;

setInterval(function () {
  let newdate = new Date();
  clock.innerHTML = newdate.toLocaleTimeString();
}, 1000);

console.log(myDate);