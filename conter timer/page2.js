const daysEmement = document.querySelector("#days");
const hoursEmement = document.querySelector("#hours");
const minutesEmement = document.querySelector("#minutes");
const secondsEmement = document.querySelector("#seconds");
const heading= document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");
const body=document.querySelector("#body");

const second=1000,
 minute=60*second,
 hour=60*minute,
 day=24*hour;

 const timerFunction=()=>{
//genrating date
let now = new Date(),
dd=String(now.getDate()).padStart(2,"0"),
mm=String(now.getMonth()+1).padStart(2,"0"),
yyyy = now.getFullYear();
if (dd<0||dd>32||mm<0||mm>13) {
   alert("invalid Date");
}
now = `${mm}/${dd}/${yyyy}`;

document.addEventListener("DOMContentLoaded", function() {
   // Retrieve image data from local storage
   const imageSrc = localStorage.getItem("image");

   if (imageSrc) {
       // Set image as background of the background div
       document.getElementById("body").style.backgroundImage = "url('" + imageSrc + "')";
   } else {
       // Handle case where image data is not found in local storage
       console.error("Image data not found in local storage");
   }
});

// taikng date form local storage
const enteredDay= localStorage.getItem('date').padStart(2,"0");
const enteredMsg= localStorage.getItem('msg').padStart(2,"0");

let targetDate = enteredDay;

if(now>targetDate){
targetDate.setFullYear(targetDate.getFullYear()+1);

}

const intervalId = setInterval( ()=>{
   const timer = new Date(targetDate).getTime();
   const today = new Date().getTime();
  
   const difference = timer-today;
   console.log(today);
   console.log(timer);
   
   const leftDay= Math.floor(difference/day);
   const leftHour=Math.floor((difference%day)/hour);
   const leftMinute=Math.floor((difference%hour)/minute);
   const leftSecond=Math.floor((difference%minute)/second); 

   daysEmement.innerText=leftDay;
   hoursEmement.innerText=leftHour;
   minutesEmement.innerText=leftMinute;
   secondsEmement.innerText=leftSecond;
   if (difference<0) {
      heading.innerText= enteredMsg;
      heading.style.fontSize="400%";
      counterTimer.style.display ="none";
      body.style.backdropFilter=("blur(1.5px)")

      clearInterval(intervalId);
   }
   
   
   console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);
}
);
};

 timerFunction();
