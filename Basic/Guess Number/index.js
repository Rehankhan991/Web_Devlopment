let user, chances =0;
let num = Math.floor(Math.random() * 100) + 1;


do {
  user= prompt('Enter the Number')


if(num !=  user && num>user){
  console.log("You entered wrong value. Value is Greater than your value")
  chances++;
}

else if(num !=  user && num<user){
  console.log("You entered wrong value. Value is less than your value")
  chances++;
}

else{
  console.log("Congratulation You entered correct value")
  chances++;
  console.log("Your score is" , 100- chances)
}
} while (num!=user)

