
setInterval(()=>{
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

const amOrPm = hours >= 12 ? 'PM' : 'AM';

const twelveHourFormat = (hours % 12) || 12;

const formattedTime = `${twelveHourFormat.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amOrPm}`;


console.log("Current Date:", formattedDate);
console.log("Current Time:", formattedTime);

date.innerHTML= formattedDate;
time.innerHTML= formattedTime;
  
}, 1000)