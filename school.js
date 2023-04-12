//const!
const firstNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Scott", "Andrea", "Stan", "Nils" , "Esteban" , "Enzo" , "Timeo" , "Salome" , "Quentin" , " Lucas" , "Louka" , "Kyllian" , "Tanguy" , "Ryan" , "Will" , "William" , "Pierre" , "Acy" , "Rian"];
const lastNames = ["Smith", "Johnson", "Brown", "Davis", "Garcia", "Wilson", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Moore", "Young", "Allen", "King", "Wright", "Scott", "Green" , "Meireles"];
const ages = ["12" , "13" , "14"]
const moneys = ["10" , "50" , "100" , "15" , "20"]
const marks = ["0/20","1/20","2/20","3/20","4/20","5/20","6/20","7/20","8/20","9/20","10/20","11/20","12/20","13/20","14/20","15/20","16/20","17/20","18/20","19/20","20/20"]
const events = ["math","english","physics","science","biology","technology","sport","music"]
const gain = ["1","2"]

//variables!
var money = 0;
var food = 100;
var foodLevel = 100;
var level = 1;
var exp = 0;
var expneeded = 200
var timeinschool = 30;
var time = 6;


//scripts
function generateName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const age = ages[Math.floor(Math.random() * ages.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  document.getElementById("exp").innerHTML = "Exp: " + exp;
  document.getElementById("level").innerHTML = "Level: " + level;

// function to decrement food level and show message
function decrementFood() {
  if (foodLevel > 0) {
    foodLevel = foodLevel-1; // decrement food level by 1
    document.getElementById("food").innerHTML = "food Level: " + foodLevel; // log food level to console
  } else {
    document.getElementById("food").innerHTML = "Food has run out!"; // log message to console
    clearInterval(foodInterval); // stop decrementing food level
  }
}

// call decrementFood function every 3 seconds
let foodInterval = setInterval(decrementFood, 3000);


  document.getElementById("firstName").innerHTML = firstName;
  document.getElementById("lastName").innerHTML = lastName;
  document.getElementById("age").innerHTML = age;
   
   document.getElementById("money").innerHTML = money;
   
  setInterval(function() {
  if (exp>=expneeded) {
    exp = 0;
    expneeded *= 1.2;
    level += 1;
  }
}, 100); // 100 milliseconds = 0.1 seconds

  setInterval(function() {
      document.getElementById("exp").innerHTML = "Exp: " + exp + "/" + expneeded;
      
      document.getElementById("level").innerHTML = "Level: " + level;
      
      
      document.getElementById("tr").innerHTML = "time Remain: " + timeinschool;
      
      document.getElementById("money").innerHTML = money;
      
      document.getElementById("time").innerHTML = "Time: " + time + "h";
      
      if(time >= 20) {
          document.getElementById("classtime").style.visibility = "hidden";
          
          timeinschool = 30;
      }else {

document.getElementById("classtime").style.visibility = "visible";
      }
      
      
      if(time>=24) {
      time = 0;
  }
 }, 100);
 }

  
  setInterval(function() {
  if(timeinschool<=0) {
      alert("YOU LOST");
  }else {
      timeinschool -= 1;
  }
}, 1000); // 100 milliseconds = 0.1 seconds

    
  

setInterval(function() {
  time += 1;
}, 30000); // 100 milliseconds = 0.1 seconds

  
  
  
  
  
  

function classtime(){
    const mark = marks[Math.floor(Math.random() * marks.length)];
    document.getElementById("mark").innerHTML = mark;
  
  const event = events[Math.floor(Math.random() * events.length)];
  
  
  const classes = events[Math.floor(Math.random() * events.length)];
  
  document.getElementById("classes").innerHTML = classes;
  


exp = exp +1;
  timeinschool = 30;
  
  
}
function trade(){
    money= money + Math.floor(Math.random() * 2) + 0.2; // generates a random number between 1 and 10;
    document.getElementById("money").innerHTML = money;
}
function eat(){
if(money>=10) {
   money -=10;
    foodLevel = 100;
   
    document.getElementById("food").innerHTML = "food Level: " + foodLevel;
    }
}
function sleep(){
    time+=5;
}