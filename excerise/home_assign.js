function checkLeapYear(year) {
   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400){
   console.log(`${year} is a leap year`)
   } else {
     console.log(`${year} isn't a leap year`)
   }
} 

checkLeapYear(2020)