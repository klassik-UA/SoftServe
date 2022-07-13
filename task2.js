const age = prompt('How old are you?',);
const pension = 65 - age;
console.log(pension);
const year = new Date();
const pensionDate = year.getFullYear() + pension;
console.log(pensionDate);