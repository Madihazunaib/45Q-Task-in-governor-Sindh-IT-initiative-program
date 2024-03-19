// Task 16
var guest = ["Ali", "Bisma", "Mahnoor", "John"];
var canNotAttend = "Ali";
var newGuest = "kinza";
guest[guest.indexOf(canNotAttend)] = newGuest;
console.log(guest);
guest.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinner table so I am invited more people. "));
});
//part 2:
var guestBeg = "Ali";
guest.unshift(guestBeg);
console.log(guest);
//part 3 Middle
var MiddleGuest = "Fatima";
var MiddleIndex = guest.length / 3;
guest.splice(MiddleIndex, 0, MiddleGuest);
console.log(guest);
//part 4 append
guest.push("Zaman");
console.log(guest);
//part 5
guest.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited in the more people list on dinner"));
});
