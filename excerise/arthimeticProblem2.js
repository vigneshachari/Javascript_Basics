var numberOne = 25;
var numberTwo = 25;


magicalNUmber(numberOne,numberTwo);

function magicalNUmber(one,two){
  if( numberOne===50 || numberTwo===50){
    console.log("This is a magical number");
}
else if(numberOne+numberTwo===50){
  console.log("A magical Number");
}

else {
  console.log("Not a magical number");
}
}
