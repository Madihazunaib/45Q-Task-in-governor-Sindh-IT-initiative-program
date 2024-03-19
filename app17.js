//Task 17
// Initial list of guests
var guests = ["Any", "Bilal", "Ahmad", "john Huzifa"];
//Informing thst only two people can be invited 
console.log("Due to limited space,only two people can be invited for dinner.");
// // removing guests until only two names remain 
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ",you're no longer invited to dinner."));
}
// // printing invitation to the remaining two guest
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ",you're still invited to dinner."));
});
// // Removing the last two names from the list
guests.pop();
guests.pop();
// //pricing the final list to confirm it's empty
console.log("final guest list:", guests);
