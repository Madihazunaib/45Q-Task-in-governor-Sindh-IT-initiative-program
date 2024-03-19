// Task 16
let guest : string [] = ["Ali","Bisma","Mahnoor","John"];

let canNotAttend : string = "Ali";

let newGuest : string = "kinza";
guest [guest.indexOf(canNotAttend)] = newGuest;
console.log(guest);
guest.map((items) => 
console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people. `));

//part 2:
let guestBeg : string = "Ali"
guest.unshift(guestBeg);
console.log(guest)

//part 3 Middle
let MiddleGuest : string = "Fatima"
let MiddleIndex = guest.length/3
guest.splice(MiddleIndex,0,MiddleGuest)
console.log(guest);

//part 4 append
guest.push("Zaman")
console.log(guest);
 
//part 5
guest.map((items) =>
console.log(`Dear ${items}, you are invited in the more people list on dinner`));


