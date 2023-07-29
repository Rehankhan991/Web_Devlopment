let chances = 10;
let user_score=0;
let cpu_score = 0;

const match = (user, cpu) => {
  if (user === cpu) {
    console.log("Your choice is_" + user + "_and cpu choice is_" + cpu)
    console.log("Match Tied.. try again...")
    chances--;
    console.log("Chaances left =", chances)
  }
  else if (user == 's' && cpu == 'p ') {
    console.log("Your choice is_" + user + "_and cpu choice is_" + cpu)
    console.log("CPU win...")
    cpu_score++
    chances--;
    console.log("Chaances left =", chances)
  }
  else if (user == 'p' && cpu == 's') {
    console.log("Your choice is_" + user + "_and cpu choice is_" + cpu)
    console.log("USER win...")
    user_score++
    chances--;
    console.log("Chaances left =", chances)
  }
  else if (user == 'c' && cpu == 'p') {
    console.log("Your choice is_" + user + "_and cpu choice is_" + cpu)
    console.log("USER win...")
    user_score++
    chances--;
    console.log("Chaances left =", chances)
  }
  else if (user == 'c' && cpu == 's') {
    console.log("Your choice is_" + user + "_and cpu choice is_" + cpu)
    console.log("CPU win...")
    cpu_score++
    chances--;
    console.log("Chaances left =", chances)
  }
  else if (user == 's' && cpu == 'c') {
    console.log("Your choice is_" + user + "_and cpu choice is_" + cpu)
    console.log("USER win...")
    user_score++
    chances--;
    console.log("Chaances left =", chances)
  }
  else if (user == 'p' && cpu == 'c') {
    console.log("Your choice is_" + user + "_and cpu choice is_" + cpu)
    console.log("CPU win...")
    cpu_score++;
    chances--;
    console.log("Chaances left =", chances)
  }

}
while (chances !=0) {
  let user = prompt("\nEnter s for Stone , p for Ppaper and c for Scissor")
  let com = Math.floor(Math.random() * 3)
  let cpu = ["s", "p ", "c"][com]
  match(user, cpu);
  // chances--;
  // console.log("Chaances left =", chances)
}

console.log("The Score is:- " )
console.log("USER ;- ", user_score)
console.log("CPU ;- ", cpu_score)

if(user_score>cpu_score){
  console.log("Congratulations... You wins")
}
else{
  console.log("Better Luck next time... CPU wins...")
}
