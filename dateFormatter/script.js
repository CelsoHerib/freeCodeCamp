const currentParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");


const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
const formattedHours = hours % 12;
const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
const formattedTime = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' +
ampm;
const formattedDate = `${day}-${month}-${year}`;
const formattedDateTime = formattedDate + ' ' + formattedTime;
